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

@Component({
  selector: 'app-building-materials',
  templateUrl: './building-materials.component.html',
  styleUrls: ['./building-materials.component.css']
})
export class BuildingMaterialsComponent implements OnInit{

  public materials:any=[];
  addBuildingMaterialRequest: BuildingMaterial = {
    id:'',
    name:'',
    description:'',
    gammaSW:0,
    gammaW:0,
    ro:0,
    cw:0

  };

  displayedColumns: string[] = ['id', 'name', 'description', 'gammaSW','gammaW','ro','cw' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private buildingMaterialsService: BuildingMaterialService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllBuildingMaterials();   
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

  
}


