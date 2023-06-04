import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { FloorOnTheGround } from 'src/app/models/floorOnTheGround.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { FloorOnTheGroundService } from 'src/app/services/floor-on-the-ground.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { DialogFloorOnTheGroundComponent } from '../../BUILDING OBJECT/DIALOGS/dialog-floor-on-the-ground/dialog-floor-on-the-ground.component';

@Component({
  selector: 'app-floor-on-the-ground',
  templateUrl: './floor-on-the-ground.component.html',
  styleUrls: ['./floor-on-the-ground.component.css']
})
export class FloorOnTheGroundComponent {
  public floorOnTheGround:any[]=[];
  addFloorOnTheGroundRequest: FloorOnTheGround = {
    name:'',
    description:'',
    Ag:0,
    P:0,
    B:0,
    GroundMaterial:'',
    λgr:0,
    w:0,
    df:0,
    λf:0,
    dt:0,
    ugr:0,
    Rf:0,

  }   
  

  displayedColumns: string[] = ['id', 'name', 'description', 'groundMaterial','ugr'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!:string;    

  constructor(private floorOnTheGroundService: FloorOnTheGroundService, private dialog: MatDialog,private auth: AuthService,
     private userStore: UserStoreService,private confirmService: NgConfirmService){}

  ngOnInit(): void {
    this.getAllFloorOnTheGround();  
    this.userStore.getRoleFromStore()
    .subscribe(val=>{
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
    this.dialog.open(DialogFloorOnTheGroundComponent, {
     width:'40%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllFloorOnTheGround();
      }
    })
  };

  addFloorOnTheGround(){
    this.floorOnTheGroundService.addFloorOnTheGround(this.addFloorOnTheGroundRequest)
    .subscribe({
      next: (floorOnTheGround)=>{
        console.log(floorOnTheGround);
      },
      error:(response)=>{
        console.log(response);
      }
      
    })
  }

  getAllFloorOnTheGround(){
    this.floorOnTheGroundService.getAllFloorOnTheGround()
    .subscribe({
      next: (res)=>{  
        this.floorOnTheGround=res;
        console.log(res)      
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err)=>{
        console.log(err);
        alert("Error while fetching the Records")
      }

    })
  }

  // editMaterial(row: any){
  //   this.dialog.open(DialogComponent,{
  //     width:'30%',
  //     data: row
  //   }).afterClosed().subscribe(val=>{
  //     if(val==='update'){
  //       this.getAllBuildingMaterials();
  //     }
  //   })
  // };

    // deleteMaterial(id: number){
    //     this.confirmService.showConfirm("Are you sure want to remove item permanently ?",
    //     ()=>{
    //     this.buildingMaterialsService.deleteMaterial(id)
    //     .subscribe({
    //     next:(res)=>{
    //       alert("material deleted successfully")
    //       this.getAllBuildingMaterials();
    //     },
    //     error:(err)=>{
    //       console.log(err)
    //       alert("Error while deleting the product !")
    //     }
    //     })
    //     },
    //       ()=>{
    //       alert("User selected No")
    //     }
    //   )  
    
    // }

}
