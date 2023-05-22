import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { Doors } from 'src/app/models/doors.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { DoorService } from 'src/app/services/door.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { DialogDoorComponent } from '../dialog-door/dialog-door.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent {
  public Doors:any=[];
  addDoorsRequest: Doors = {    
    name:'',
    description: '',
    width: 0,
    height: 0, 
    perimeter: 0, 
    quantity: 0,
    singleArea: 0, 
    u: 0,
    cardinalDirection: '', 
    floor: 0,

  };

  displayedColumns: string[] = ['id','name','description', 'width', 'height','perimeter'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!:string;    

  constructor(private doorService: DoorService, private dialog: MatDialog,private auth: AuthService,
     private userStore: UserStoreService,private confirmService: NgConfirmService){}

  ngOnInit(): void {
    this.getAllDoors();  
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
    this.dialog.open(DialogDoorComponent, {
     width:'50%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllDoors();
      }
    })
  };

  addDoor(){
    this.doorService.addDoor(this.addDoorsRequest)
    .subscribe({
      next: (parameters: any)=>{
        console.log(parameters);
      },
      error:(response: any)=>{
        console.log(response);
      }
      
    })
  }

  getAllDoors(){
    this.doorService.getAllDoors()
    .subscribe({
      next: (res: any[] | undefined)=>{  
        this.Doors=res;
        console.log(res)      
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any)=>{
        console.log(err);
        alert("Error while fetching the Records")
      }

    })
  }

  editDoor(row: any){
    this.dialog.open(DoorsComponent,{
      width:'30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllDoors();
      }
    })
  };

  deleteDoor(id: number){

    this.confirmService.showConfirm("Are you sure want to remove item permanently ?",
    ()=>{
      this.doorService.deleteDoor(id)
    .subscribe({
      next:(res: any)=>{
        alert("material deleted successfully")
        this.getAllDoors();
      },
      error:(err: any)=>{
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
