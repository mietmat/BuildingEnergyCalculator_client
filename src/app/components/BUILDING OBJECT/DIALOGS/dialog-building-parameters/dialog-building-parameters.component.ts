import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth-service.service';
import { BuildingParametersService } from 'src/app/services/building-parameters.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dialog-building-parameters',
  templateUrl: './dialog-building-parameters.component.html',
  styleUrls: ['./dialog-building-parameters.component.css']
})
export class DialogBuildingParametersComponent {
  deliveryList = [true,false]
  buildingParametersForm: FormGroup;
 
  actionBtn : string = "Save"
  public role!:string;    

  constructor(private formBuilder : FormBuilder, 
    private api: BuildingParametersService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogBuildingParametersComponent>,
    private auth: AuthService,
    private userStore: UserStoreService){
      this.buildingParametersForm = this.formBuilder.group({
        buildingLengthN: [0,Validators.required],
        buildingLengthE: [0,Validators.required],
        buildingLengthS: [0,Validators.required],
        buildingLengthW: [0,Validators.required],
        storeyHeightNet: [0,Validators.required],
        storeyHeightGross: [0,Validators.required],
        cellarHeight: [0,Validators.required],
        storeyQuantity: [0,Validators.required],
        buildingArea: [0,Validators.required],
        staircaseSurface: [0,Validators.required],
        usableAreaOfTheStairCase: [0,Validators.required],
        staircaseWidth: [0,Validators.required],
        heatAtticArea: [0,Validators.required],
        unheatedAtticArea: [0,Validators.required],
        usableAreaOfTheBuilding: [0,Validators.required],
        atticUsableArea: [0,Validators.required],
        perimeterOfTheBuilding: [0,Validators.required],
        balconyLength: [0,Validators.required],
        totalWindowAreaN: [0,Validators.required],
        totalWindowAreaE: [0,Validators.required],
        totalWindowAreaS: [0,Validators.required],
        totalWindowAreaW: [0,Validators.required],
        totalDoorAreaN: [0,Validators.required],
        totalDoorAreaE: [0,Validators.required],
        totalDoorAreaS: [0,Validators.required],
        totalDoorAreaW: [0,Validators.required],
        
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


  addBuildingParameters(){
    if(!this.editData)
    {
      if(this.buildingParametersForm.valid){
        console.log(this.buildingParametersForm.value)
        console.log("sent to backend")
        this.api.addBuildingParameters(this.buildingParametersForm.value)
        .subscribe({
          next:(res)=>{
            alert("Building information added successfully");
            console.log(res)
            console.log("after response")

            this.buildingParametersForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the building information")
            console.log("FORM: " + this.buildingParametersForm)
            console.log("error: " + err)
          }
        })
      }   
      else{
        console.log("nie zwalidowałem się !")  

      }     
    }else{

      this.updateBuildingInformation()
    }
  }

  updateBuildingInformation(){
    this.api.updateBuildingParameters(this.buildingParametersForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Building information updated successfully");
        console.log(res);
        this.buildingParametersForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        console.log(err);
        alert('Error while updating the record !')
      }
    })
  }  

}

