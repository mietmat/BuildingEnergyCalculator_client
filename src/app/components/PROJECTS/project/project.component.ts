import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgConfirmService } from 'ng-confirm-box';
import { ProjectModel } from 'src/app/models/project-model.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { ProjectModelService } from 'src/app/services/project-model.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { DialogProjectsComponent } from '../DIALOGUES/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  public projects: any[] = [];
  addProjectRequest: ProjectModel = {
    name: ''
  };
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public role!: string;

  constructor(private projectService: ProjectModelService, private dialog: MatDialog, private auth: AuthService,
    private userStore: UserStoreService, private confirmService: NgConfirmService) { }

  ngOnInit(): void {
    this.getAllProjects();
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

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogProjectsComponent, {
      width: '74%'
    });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllProjects();
      }
    })
  };

  getAllProjects() {
    this.projectService.getAllProjects()
      .subscribe({
        next: (res) => {
          this.projects = res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
          alert("Error while fetching the Records");
        }
      });
  }

  editProject(row: any) {
    this.dialog.open(DialogProjectsComponent, {
      width: '74%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllProjects();
      }
    })
  };

  deleteProject(id: number) {
    this.confirmService.showConfirm("Are you sure want to remove project ?",
      () => {
        this.projectService.deleteProject(id)
          .subscribe({
            next: (res) => {
              alert("project deleted successfully")
              this.getAllProjects();
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

  setProjectName(row: any) {
    this.projectService.setProjectName("Project: " + row.name);
  }

}
