import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DivisionalStructureService } from 'src/app/services/divisional-structure.service';
import { DialogDivisionalStructureComponent } from '../dialog-divisional-structure/dialog-divisional-structure.component';
import { DivisionalStructure } from 'src/app/models/divisional-structures.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-divisional-structures',
  templateUrl: './divisional-structures.component.html',
  styleUrls: ['./divisional-structures.component.css']
})
export class DivisionalStructuresComponent implements OnInit {

  public materials!: any[];
  public divisionalStructures:any=[];

  addDivisionalStructuresRequest: DivisionalStructure = {
    id:'',
    name:'',
    description:'',
    buildingMaterials:[''],
    divisionalThickness: 0,
    R:0,
    U:0,
    Rsi:0,
    Rse:0,

  };

  displayedColumns: string[] = ['id', 'name', 'description', 'divisionalThickness','U' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private divisionalStructureService: DivisionalStructureService, private dialog: MatDialog, private buildingMaterialsService:BuildingMaterialService){}

  ngOnInit(): void {
    this.getAllBuildingMaterials();
    this.getAllDivisionalStructures();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(DialogDivisionalStructureComponent, {
      width:'30%'
     }).afterClosed().subscribe(val=>{
       if(val==='save'){
         this.getAllDivisionalStructures();
       }
     })
  };

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
        alert("Error while fetching the Records BM")
      }

    })
  }

  getAllDivisionalStructures(){
    this.divisionalStructureService.getAllDivisionalStructures()
    .subscribe({
      next: (res)=>{  
        this.divisionalStructures=res;
        console.log(res)      
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err)=>{
        console.log(err);
        alert("Error while fetching the Records DS")
      }
      
    })
  }

  addDivisionalStructure(){
    this.divisionalStructureService.addDivisionalStructure(this.addDivisionalStructuresRequest)
    .subscribe({
      next: (structure) =>{
        console.log(structure);
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }
}
