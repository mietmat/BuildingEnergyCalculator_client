import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth-service.service';
import { ProjectModelService } from 'src/app/services/project-model.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dialog-projects',
  templateUrl: './dialog-projects.component.html',
  styleUrls: ['./dialog-projects.component.css']
})
export class DialogProjectsComponent {

  deliveryList = [true, false]
  projectForm: FormGroup;

  actionBtn: string = "Save"
  dialogTitle: string = "Add Project"

  public role!: string;

  constructor(private formBuilder: FormBuilder,
    private api: ProjectModelService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogProjectsComponent>,
    private auth: AuthService,
    private userStore: UserStoreService) {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      address: this.formBuilder.group({
        city: [''],
        street: [''],
        postalCode: [''],
      }),
      investor: this.formBuilder.group({
        name: [''],
        lastName: [''],
        phoneNumber: [''],
        email: [''],
        address: this.formBuilder.group({
          city: [''],
          street: [''],
          postalCode: [''],
        })
      }),
      architect: this.formBuilder.group({
        name: [''],
        phoneNumber: [''],
        email: ['']
      })
    });

  }

  ngOnInit(): void {
    this.api.setProjectName(this.editData.name)
    if (this.editData) {
      this.actionBtn = "Update";
      this.projectForm.controls['name'].setValue(this.editData.name);
      this.projectForm.controls['description'].setValue(this.editData.description);
      this.dialogTitle = "Edit Project";
    }

    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken
      })
  }

  addProject() {
    console.log("addProjectFunction")
    if (!this.editData) {
      if (this.projectForm.valid) {
        console.log(this.projectForm.value)
        console.log("sent to backend")
        this.api.addProject(this.projectForm.value)
          .subscribe({
            next: (res) => {
              alert("Project added successfully");
              console.log(res)
              console.log("after response")

              this.projectForm.reset();
              this.dialogRef.close('save');
            },
            error: (err) => {
              alert("Error while adding project")
              console.log("FORM: " + this.projectForm)
              console.log("error: " + err)
            }
          });
      }
      else {
        console.log("nie zwalidowałem się !")

      }
    } else {
      console.log("updateProjectFunction")
      this.updateProject()
    }
  }

  updateProject() {
    this.api.updateProject(this.projectForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Project updated successfully");
          console.log(res);
          this.projectForm.reset();
          this.dialogRef.close('update');
        },
        error: (err) => {
          console.log(err);
          alert('Error while updating the record !')
        }
      })
  }

}
