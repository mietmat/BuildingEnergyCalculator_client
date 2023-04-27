import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { BuildingMaterial } from 'src/app/models/building-material.model';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-building-materials',
  templateUrl: './building-materials.component.html',
  styleUrls: ['./building-materials.component.css']
})
export class BuildingMaterialsComponent implements OnInit{

  public materials:any=[];
  addBuildingMaterialRequest: BuildingMaterial = {
    name:'',
    description:'',
    thickness:0,
    lambdaSW:0,
    lambdaW:0,
    ro:0,
    cw:0

  };

  displayedColumns: string[] = ['id', 'name', 'description','thickness' , 'lambdaSW','lambdaW','ro','cw','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!:string;    

  constructor(private buildingMaterialsService: BuildingMaterialService, private dialog: MatDialog,private auth: AuthService,
     private userStore: UserStoreService,private confirmService: NgConfirmService){}

  ngOnInit(): void {
    this.getAllBuildingMaterials();  
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
    this.dialog.open(DialogComponent, {
     width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllBuildingMaterials();
      }
    })
  };

  addBuildingMaterial(){
    this.buildingMaterialsService.addMaterial(this.addBuildingMaterialRequest)
    .subscribe({
      next: (material)=>{
        console.log(material);
      },
      error:(response)=>{
        console.log(response);
      }
      
    })
  }

  getAllBuildingMaterials(){
    this.buildingMaterialsService.getAllMaterials()
    .subscribe({
      next: (res)=>{  
        this.materials=res;
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

  editMaterial(row: any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllBuildingMaterials();
      }
    })
  };

  deleteMaterial(id: number){

    this.confirmService.showConfirm("Are you sure want to remove item permanently ?",
    ()=>{
      this.buildingMaterialsService.deleteMaterial(id)
    .subscribe({
      next:(res)=>{
        alert("material deleted successfully")
        this.getAllBuildingMaterials();
      },
      error:(err)=>{
        console.log(err)
        alert("Error while deleting the product !")
      }
      })
    },
    ()=>{
       alert("User selected No")
    }
    )  
    
}

  
}


