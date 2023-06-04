import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth-service.service';
import { FloorOnTheGroundService } from 'src/app/services/floor-on-the-ground.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dialog-floor-on-the-ground',
  templateUrl: './dialog-floor-on-the-ground.component.html',
  styleUrls: ['./dialog-floor-on-the-ground.component.css']
})
export class DialogFloorOnTheGroundComponent {
  deliveryList = [true,false]
  floorOnTheGroundForm: FormGroup;
 
  actionBtn : string = "Save"
  public role!:string;    

  constructor(private formBuilder : FormBuilder, 
    private api: FloorOnTheGroundService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogFloorOnTheGroundComponent>,
    private auth: AuthService,
    private userStore: UserStoreService){
      this.floorOnTheGroundForm = this.formBuilder.group({
        name: ['',Validators.required],
        description: ['',Validators.required],
        Ag: [0,Validators.required],
        P: [0,Validators.required],
        B: [0,Validators.required],
        GroundMaterial: ['',Validators.required],
        λgr: [0,Validators.required],
        w: [0,Validators.required],
        df: [0,Validators.required],
        λf: [0,Validators.required],
        Rf: [0,Validators.required],
        dt: [0,Validators.required],
        Ugr: [0,Validators.required]   
                
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

  addFloorOnTheGround(){
    if(!this.editData)
    {
      if(this.floorOnTheGroundForm.valid){
        console.log(this.floorOnTheGroundForm.value)
        console.log("sent to backend")
        this.api.addFloorOnTheGround(this.floorOnTheGroundForm.value)
        .subscribe({
          next:(res)=>{
            alert("Building information added successfully");
            console.log(res)
            console.log("after response")

            this.floorOnTheGroundForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the floor on the ground")
            console.log("FORM: " + this.floorOnTheGroundForm)
            console.log("error: " + err)
          }
        })
      }   
      else{
        console.log("nie zwalidowałem się !")  

      }     
    }else{

      this.updateFloorOnTheGroundForm()
    }
  }

  updateFloorOnTheGroundForm(){
    this.api.updateFloorOnTheGround(this.floorOnTheGroundForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Building information updated successfully");
        console.log(res);
        this.floorOnTheGroundForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        console.log(err);
        alert('Error while updating the record !')
      }
    })
  }  

}
