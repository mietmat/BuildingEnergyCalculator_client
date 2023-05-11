import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { BuildingInformation } from 'src/app/models/building-information.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { BuildingInformationService } from 'src/app/services/building-information.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogBuildingInformationComponent } from '../dialog-building-information/dialog-building-information.component';

@Component({
  selector: 'app-building-information',
  templateUrl: './building-information.component.html',
  styleUrls: ['./building-information.component.css']
})
export class BuildingInformationComponent implements OnInit{
  public buildingInformations:any[]=[];
  addBuildingInformationRequest: BuildingInformation = {
    name:'',
    description:'',
    address:{      
        city:'',
        street:'',
        postalCode:''    
      
    },
    investor:{
      name:'',
      lastName:'',
      phoneNumber:'',
      email:'',
      address:{
        city:'',
        street:'',
        postalCode:''
      },


    }

   

  };

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!:string;    

  constructor(private buildingInformationService: BuildingInformationService, private dialog: MatDialog,private auth: AuthService,
     private userStore: UserStoreService,private confirmService: NgConfirmService){}

  ngOnInit(): void {
    this.getAllBuildingInformation();  
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
    this.dialog.open(DialogBuildingInformationComponent, {
     width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllBuildingInformation();
      }
    })
  };

  // addBuildingMaterial(){
  //   this.buildingMaterialsService.addMaterial(this.addBuildingMaterialRequest)
  //   .subscribe({
  //     next: (material)=>{
  //       console.log(material);
  //     },
  //     error:(response)=>{
  //       console.log(response);
  //     }
      
  //   })
  // }

  getAllBuildingInformation(){
    this.buildingInformationService.getAllBuildingInformation()
    .subscribe({
      next: (res)=>{  
        this.buildingInformations=res;
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
