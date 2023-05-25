import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent {
  deliveryList = [true,false]
  windowForm: FormGroup;
 
  actionBtn : string = "Save"
  public role!:string;    

  constructor(private formBuilder : FormBuilder, 
    private api: WindowService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogWindowComponent>,
    private auth: AuthService,
    private userStore: UserStoreService){
      this.windowForm = this.formBuilder.group({
        name: ['',Validators.required],
        description: ['',Validators.required],
        width: [0,Validators.required],
        height: [0,Validators.required],
        perimeter: [0,Validators.required],
        quantity: [0,Validators.required],
        singleArea: [0,Validators.required],
        u: [0,Validators.required],
        cardinalDirection: [0,Validators.required],
        floor: [0,Validators.required],


        
      });
      
    }

  ngOnInit(): void {   

    // if(this.editData){
    //   this.actionBtn = "Update";
    //   this.buildingInformationForm.controls['name'].setValue(this.editData.name);
    //   this.buildingInformationForm.controls['description'].setValue(this.editData.description);
          
    // }

    this.userStore.getRoleFromStore()
      .subscribe(val=>{
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken
      })
  }

  addWindow(){
    if(!this.editData)
    {
      if(this.windowForm.valid){
        console.log(this.windowForm.value)
        console.log("sent to backend")
        this.api.addWindow(this.windowForm.value)
        .subscribe({
          next:(res)=>{
            alert("Window added successfully");
            console.log(res)
            console.log("after response")

            this.windowForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the window")
            console.log("FORM: " + this.windowForm)
            console.log("error: " + err)
          }
        })
      }   
      else{
        console.log("nie zwalidowałem się !")  

      }     
    }else{

      this.updateDoor()
    }
  }

  updateDoor(){
    this.api.updateWindow(this.windowForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Door updated successfully");
        console.log(res);
        this.windowForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        console.log(err);
        alert('Error while updating the record !')
      }
    })
  }  

}

