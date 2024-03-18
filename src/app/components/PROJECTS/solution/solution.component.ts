import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { SolutionService } from '../../../services/solution.service';
import { Solution } from '../../../models/solution.model';
import { DialogSolutionComponent } from '../DIALOGUES/dialog-solution/dialog-solution.component';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {
  solutions: any[] = [];
  @Input() projectId!: number;

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource!: MatTableDataSource<Solution>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public role!: string;

  constructor(private solutionService: SolutionService, private dialog: MatDialog, private auth: AuthService,
    private userStore: UserStoreService, private confirmService: NgConfirmService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("Params:", params);
      this.projectId = params['id'];
      console.log("ProjectId: ", this.projectId);
      if (this.projectId !== undefined) {
        console.log("Solution-route-projectId:", this.projectId)
        this.getProjectSolutions(this.projectId);
      }
      else {
        this.getAllSolutions();

      }
    });

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

  openDialog(editData: any) {
    console.log("editData:", editData);
    this.dialog.open(DialogSolutionComponent, {
      width: '40%',
      data: editData ? { projectId: editData, name: editData.name } : null

    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        console.log("GetProjectSolutions");
        this.getProjectSolutions(editData ? editData : null);
      }
    })
  };

  getProjectSolutions(projectId: any) {
    this.solutionService.getProjectSolutions(projectId)
      .subscribe({
        next: (res) => {
          this.solutions = res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
          alert("Error while fetching the Records")
        }

      })
  }

  getAllSolutions() {
    this.solutionService.getAllSolutions()
      .subscribe({
        next: (res) => {
          this.solutions = res;
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
          alert("Error while fetching the Records")
        }

      })
  }

  editSolution(row: any) {
    this.dialog.open(DialogSolutionComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getProjectSolutions(this.projectId);
      }
    })
  };

  deleteSolution(id: number) {
    this.confirmService.showConfirm("Are you sure want to remove solution ?",
      () => {
        this.solutionService.deleteSolution(id)
          .subscribe({
            next: (res) => {
              alert("solution deleted successfully")
              this.getProjectSolutions(this.projectId);
            },
            error: (err) => {
              console.log(err)
              alert("Error while deleting project !")
            }
          })
      },
      () => {
        alert("User selected No")
      }
    )

  }
}


