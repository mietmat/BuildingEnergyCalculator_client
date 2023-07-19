import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { Windows } from 'src/app/models/window.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { WindowService } from 'src/app/services/window.service';
import { DialogWindowComponent } from '../../BUILDING OBJECT/DIALOGS/dialog-window/dialog-window.component';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent {
  public Windows:any=[];
  addWindowRequest: Windows = { 
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

  displayedColumns: string[] = ['id','name','description', 'width', 'height','perimeter','u'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!:string;    

  constructor(private windowService: WindowService, private dialog: MatDialog,private auth: AuthService,
     private userStore: UserStoreService,private confirmService: NgConfirmService){}

  ngOnInit(): void {
    this.getAllWindows();  
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
    this.dialog.open(DialogWindowComponent, {
     width:'50%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllWindows();
      }
    })
  };

  addWindow(){
    this.windowService.addWindow(this.addWindowRequest)
    .subscribe({
      next: (parameters: any)=>{
        console.log(parameters);
      },
      error:(response: any)=>{
        console.log(response);
      }
      
    })
  }

  getAllWindows(){
    this.windowService.getAllWindows()
    .subscribe({
      next: (res: any[] | undefined)=>{  
        this.Windows=res;
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

  editWindow(row: any){
    this.dialog.open(WindowsComponent,{
      width:'30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllWindows();
      }
    })
  };

  deleteWindow(id: number){

    this.confirmService.showConfirm("Are you sure want to remove item permanently ?",
    ()=>{
      this.windowService.deleteWindow(id)
    .subscribe({
      next:(res: any)=>{
        alert("window deleted successfully")
        this.getAllWindows();
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
