import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../DIALOGS/dialog-building-materials/dialog.component';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { NgConfirmService } from 'ng-confirm-box';
import { BuildingParameters } from 'src/app/models/building-parameters.model';
import { BuildingParametersService } from 'src/app/services/building-parameters.service';
import { DialogBuildingParametersComponent } from '../DIALOGS/dialog-building-parameters/dialog-building-parameters.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-building-parameters',
  templateUrl: './building-parameters.component.html',
  styleUrls: ['./building-parameters.component.css']
})
export class BuildingParametersComponent {
  buildingParametersForm: FormGroup;

  public buildingParameters: any = [];
  addBuildingParametersRequest: BuildingParameters = {
    buildingLengthN: 0,
    buildingLengthE: 0,
    buildingLengthS: 0,
    buildingLengthW: 0,
    storeyHeightNet: 0,
    storeyHeightGross: 0,
    cellarHeight: 0,
    storeyQuantity: 0,
    buildingArea: 0,
    staircaseSurface: 0,
    usableAreaOfTheStairCase: 0,
    staircaseWidth: 0,
    heatAtticArea: 0,
    unheatedAtticArea: 0,
    usableAreaOfTheBuilding: 0,
    atticUsableArea: 0,
    perimeterOfTheBuilding: 0,
    balconyLength: 0,
    totalWindowAreaN: 0,
    totalWindowAreaE: 0,
    totalWindowAreaS: 0,
    totalWindowAreaW: 0,
    totalDoorAreaN: 0,
    totalDoorAreaE: 0,
    totalDoorAreaS: 0,
    totalDoorAreaW: 0,
  };

  displayedColumns: string[] = ['id', 'BuildingLengthN', 'BuildingLengthE'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!: string;

  constructor(private buildingParametersService: BuildingParametersService, private dialog: MatDialog, private auth: AuthService,
    private userStore: UserStoreService, private confirmService: NgConfirmService, private formBuilder: FormBuilder) {
    this.buildingParametersForm = this.formBuilder.group({
      buildingLengthN: ["", Validators.required],
      buildingLengthE: ["", Validators.required],
      buildingLengthS: ["", Validators.required],
      buildingLengthW: ["", Validators.required],
      storeyHeightNet: ["", Validators.required],
      storeyHeightGross: ["", Validators.required],
      cellarHeight: ["", Validators.required],
      storeyQuantity: ["", Validators.required],
      buildingArea: ["", Validators.required],
      staircaseSurface: ["", Validators.required],
      usableAreaOfTheStairCase: ["", Validators.required],
      staircaseWidth: ["", Validators.required],
      heatAtticArea: ["", Validators.required],
      unheatedAtticArea: ["", Validators.required],
      usableAreaOfTheBuilding: ["", Validators.required],
      atticUsableArea: ["", Validators.required],
      perimeterOfTheBuilding: ["", Validators.required],
      balconyLength: ["", Validators.required],
      totalWindowAreaN: ["", Validators.required],
      totalWindowAreaE: ["", Validators.required],
      totalWindowAreaS: ["", Validators.required],
      totalWindowAreaW: ["", Validators.required],
      totalDoorAreaN: ["", Validators.required],
      totalDoorAreaE: ["", Validators.required],
      totalDoorAreaS: ["", Validators.required],
      totalDoorAreaW: ["", Validators.required],

    });
  }

  ngOnInit(): void {
    this.getAllBuildingParameters();
    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(DialogBuildingParametersComponent, {
      width: '50%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllBuildingParameters();
      }
    })
  };

  addBuildingMaterial() {
    this.buildingParametersService.addBuildingParameters(this.addBuildingParametersRequest)
      .subscribe({
        next: (parameters: any) => {
          console.log(parameters);
        },
        error: (response: any) => {
          console.log(response);
        }

      })
  }

  getAllBuildingParameters() {
    this.buildingParametersService.getAllBuildingParameters()
      .subscribe({
        next: (res: any[] | undefined) => {
          this.buildingParameters = res;
          console.log(res)
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err: any) => {
          console.log(err);
          alert("Error while fetching the Records")
        }

      })
  }

  editMaterial(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllBuildingParameters();
      }
    })
  };

  deleteMaterial(id: number) {

    this.confirmService.showConfirm("Are you sure want to remove item permanently ?",
      () => {
        this.buildingParametersService.deleteBuildingParameters(id)
          .subscribe({
            next: (res: any) => {
              alert("material deleted successfully")
              this.getAllBuildingParameters();
            },
            error: (err: any) => {
              console.log(err)
              alert("Error while deleting the product !")
            }
          })
      },
      () => {
        alert("User selected No")
      }
    )

  }


}
