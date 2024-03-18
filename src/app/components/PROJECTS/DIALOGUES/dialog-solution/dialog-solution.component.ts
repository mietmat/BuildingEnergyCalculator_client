import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolutionService } from '../../../../services/solution.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth-service.service';
import { UserStoreService } from '../../../../services/user-store.service';

@Component({
  selector: 'app-dialog-solution',
  templateUrl: './dialog-solution.component.html',
  styleUrls: ['./dialog-solution.component.css']
})
export class DialogSolutionComponent {
  deliveryList = [true, false]
  solutionForm: FormGroup;
  actionBtn: string = "Save"
  public role!: string;
  isEditing: boolean = false;
  newData: any;

  constructor(private formBuilder: FormBuilder,
    private api: SolutionService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogSolutionComponent>,
    private auth: AuthService,
    private userStore: UserStoreService) {
    this.solutionForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    if (this.editData && this.editData.name !== undefined) {
      this.isEditing = true;
      this.actionBtn = "Update";
      this.solutionForm.controls['name'].setValue(this.editData.name);
      this.solutionForm.controls['description'].setValue(this.editData.description);

    }
    else {
      this.isEditing = false;
      this.newData = { projectId: this.editData.projectId, name: this.editData.name };
    }

    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken
      })
  }

  addSolution() {
    if (!this.isEditing) {
      this.newData.projectId = this.newData.projectId || this.editData.projectId;
      console.log("editDataNotExist")
      if (this.solutionForm.valid) {
        console.log(this.solutionForm.value)
        console.log("sent to backend")
        console.log("projectId: ", this.editData.projectId)

        this.api.addSolution(this.solutionForm.value, this.newData.projectId)
          .subscribe({
            next: (res) => {
              alert("Solution added successfully");
              console.log(res)
              console.log("after response")

              this.solutionForm.reset();
              this.dialogRef.close('save');
            },
            error: (err) => {
              alert("Error while adding solution");
              console.log("FORM: " + this.solutionForm);
              console.log("error: " + err);
            }
          })
      }
      else {
        console.log("nie zwalidowałem się !");
      }
    } else {
      this.updateSolution();
    }
  }

  updateSolution() {
    this.api.updateSolution(this.solutionForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Solution updated successfully");
          console.log(res);
          this.solutionForm.reset();
          this.dialogRef.close('update');
        },
        error: (err) => {
          console.log(err);
          alert('Error while updating the record !')
        }
      })
  }
}
