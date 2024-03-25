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
import { SolutionService } from '../../../services/solution.service';

@Component({
  selector: 'app-building-parameters',
  templateUrl: './building-parameters.component.html',
  styleUrls: ['./building-parameters.component.css']
})
export class BuildingParametersComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  buildingParametersForm: FormGroup;
  buildingParameters: BuildingParameters[] = [];
  actionBtn: string = "Save";
  perimeter: number = 0;
  displayedColumns: string[] = ['id', 'BuildingLengthN', 'BuildingLengthE'];
  dataSource!: MatTableDataSource<any>;


  public role!: string;

  constructor(
    private buildingParametersService: BuildingParametersService,
    private dialog: MatDialog,
    private auth: AuthService,
    private userStore: UserStoreService,
    private confirmService: NgConfirmService,
    private formBuilder: FormBuilder,
    private solutionService: SolutionService) {

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
      perimeterOfTheBuilding: { value: 0, disabled: true },
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

    this.buildingParametersForm.valueChanges.subscribe(() => {
      const lengthN = parseFloat(this.buildingParametersForm.get('buildingLengthN')?.value);
      const lengthE = parseFloat(this.buildingParametersForm.get('buildingLengthE')?.value);
      const lengthS = parseFloat(this.buildingParametersForm.get('buildingLengthS')?.value);
      const lengthW = parseFloat(this.buildingParametersForm.get('buildingLengthW')?.value);
      if (!isNaN(lengthN) && !isNaN(lengthE) && !isNaN(lengthS) && !isNaN(lengthW)) {
        this.perimeter = lengthN + lengthE + lengthS + lengthW;
        this.buildingParametersForm.get('perimeterOfTheBuilding')?.setValue(this.perimeter);
      }
      else {
        this.perimeter = 0;
        this.buildingParametersForm.get('perimeterOfTheBuilding')?.setValue("");
        console.error('One or more values are not valid numbers.');

      }
    });
  }

  ngOnInit(): void {
    this.loadBuildingParameters();
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

  getAllBuildingParameters() {
    this.buildingParametersService.getAllBuildingParameters()
      .subscribe({
        next: (res: any[] | undefined) => {
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

  loadBuildingParameters(): void {
    const solutionId = this.solutionService.getSolutionId();
    if (solutionId) {
      this.buildingParametersService.getBuildingParametersBySolutionId(solutionId).subscribe({
        next: (res: BuildingParameters[]) => {
          if (Array.isArray(res)) {
            this.buildingParameters = res;
            console.log("RES:", res);
            this.buildingParametersForm.patchValue(res);
            this.dataSource = new MatTableDataSource(this.buildingParameters);

            const isEmpty = res.every(parameters => {
              return Object.values(parameters).every(value => value === null || value === '');
            });

            this.actionBtn = isEmpty ? 'Save' : 'Update';
            console.log("actionBtn:", this.actionBtn);

          } else {
            const isEmpty = Object.values(res).every(value => value === null || value === '');
            console.log("RES:", res);
            this.buildingParametersForm.patchValue(res);

            this.actionBtn = isEmpty ? 'Save' : 'Update';
            console.log("actionBtn:", this.actionBtn);

          }
        },
        error: (err: any) => {
          console.error('Error while fetching building parameters:', err);
        }
      });
    }
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

  saveBuildingParameters(): void {
    if (this.buildingParametersForm.valid) {
      const formData = this.buildingParametersForm.value;
      formData.perimeterOfTheBuilding = this.perimeter;
      console.log("FormData:", formData);
      const solutionId = this.solutionService.getSolutionId();
      if (solutionId) {
        console.log("Sending data to backend");
        this.buildingParametersService.saveBuildingParameters(formData, solutionId).subscribe({
          next: (res: any) => {
            console.log('Building parameters saved successfully:', res);
          },
          error: (err: any) => {
            console.error('Error while saving building parameters:', err);
          }
        });
      }
    }
    else {
      console.error('Form is invalid. Cannot save building parameters.');
    }
  }
  updateBuildingParameters(): void {
    if (this.buildingParametersForm.valid) {
      const formData = this.buildingParametersForm.value;
      formData.perimeterOfTheBuilding = this.perimeter;
      console.log("FormData:", formData);
      const solutionId = this.solutionService.getSolutionId();
      if (solutionId) {
        console.log("Sending data to backend");
        this.buildingParametersService.updateBuildingParameters(formData, solutionId).subscribe({
          next: (res: any) => {
            console.log('Building parameters updated successfully:', res);
          },
          error: (err: any) => {
            console.error('Error while update building parameters:', err);
          }
        });
      }
    }
    else {
      console.error('Form is invalid. Cannot update building parameters.');
    }
  }


}
