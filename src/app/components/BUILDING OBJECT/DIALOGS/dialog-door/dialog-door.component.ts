import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth-service.service';
import { DoorService } from 'src/app/services/door.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dialog-door',
  templateUrl: './dialog-door.component.html',
  styleUrls: ['./dialog-door.component.css']
})
export class DialogDoorComponent {

  deliveryList = [true,false]
  doorForm: FormGroup;
 
  actionBtn : string = "Save"
  public role!:string;    

  constructor(private formBuilder : FormBuilder, 
    private api: DoorService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogDoorComponent>,
    private auth: AuthService,
    private userStore: UserStoreService){
      this.doorForm = this.formBuilder.group({
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

  addDoor(){
    if(!this.editData)
    {
      if(this.doorForm.valid){
        console.log(this.doorForm.value)
        console.log("sent to backend")
        this.api.addDoor(this.doorForm.value)
        .subscribe({
          next:(res)=>{
            alert("Door added successfully");
            console.log(res)
            console.log("after response")

            this.doorForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the door")
            console.log("FORM: " + this.doorForm)
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
    this.api.updateDoor(this.doorForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Door updated successfully");
        console.log(res);
        this.doorForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        console.log(err);
        alert('Error while updating the record !')
      }
    })
  }  

}
