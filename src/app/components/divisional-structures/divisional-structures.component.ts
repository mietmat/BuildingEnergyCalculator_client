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
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-divisional-structures',
  templateUrl: './divisional-structures.component.html',
  styleUrls: ['./divisional-structures.component.css']
})
export class DivisionalStructuresComponent implements OnInit {

  public materials!: any[];
  public divisionalStructures:any=[];

  addDivisionalStructuresRequest: DivisionalStructure = {
    name:'',
    description:'',
    divisionalThickness: 0,
    R:0,
    U:0,
    Rsi:0,
    Rse:0,
    buildingMaterials:[],


  };

  displayedColumns: string[] = ['id', 'name', 'description', 'divisionalThickness','U','action' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private divisionalStructureService: DivisionalStructureService, private dialog: MatDialog,
     private confirmService: NgConfirmService){}

  ngOnInit(): void {
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
  

  getAllDivisionalStructures(){
    this.divisionalStructureService.getAllDivisionalStructures()
    .subscribe({
      next: (res)=>{  
        // this.divisionalStructures=res;
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

  editStructure(row: any)
  {
    this.dialog.open(DialogDivisionalStructureComponent,{
      width:'30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllDivisionalStructures();
      }
    })
  };

  deleteStructure(id: number){

    this.confirmService.showConfirm("Are you sure want to remove item permanently ?",
    ()=>{
      this.divisionalStructureService.deleteStructure(id)
    .subscribe({
      next:(res)=>{
        alert("product deleted successfully")
        this.getAllDivisionalStructures();
      },
      error:()=>{
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
