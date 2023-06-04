import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AuthService } from 'src/app/services/auth-service.service';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  deliveryList = [true,false]
  buildingMaterialForm !: FormGroup;
  actionBtn : string = "Save"
  public role!:string;    

  constructor(private formBuilder : FormBuilder, 
    private api: BuildingMaterialService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogComponent>,
    private auth: AuthService,
     private userStore: UserStoreService){}

  ngOnInit(): void {
    this.buildingMaterialForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      thickness: [0,Validators.required],
      lambdaSW: [0,Validators.required],
      lambdaW: [0,Validators.required],
      ro: [0,Validators.required],
      cw: [0,Validators.required],  
      
     
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.buildingMaterialForm.controls['name'].setValue(this.editData.name);
      this.buildingMaterialForm.controls['description'].setValue(this.editData.description);
      this.buildingMaterialForm.controls['thickness'].setValue(this.editData.thickness);
      this.buildingMaterialForm.controls['lambdaSW'].setValue(this.editData.lambdaSW);
      this.buildingMaterialForm.controls['lambdaW'].setValue(this.editData.lambdaW);
      this.buildingMaterialForm.controls['ro'].setValue(this.editData.ro);
      this.buildingMaterialForm.controls['cw'].setValue(this.editData.cw);      
    }

    this.userStore.getRoleFromStore()
      .subscribe(val=>{
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken
      })
  }

  addMaterial(){
    if(!this.editData)
    {
      if(this.buildingMaterialForm.valid){
        console.log(this.buildingMaterialForm)
        console.log("sent to backend")
        this.api.addMaterial(this.buildingMaterialForm.value)
        .subscribe({
          next:(res)=>{
            alert("Material added successfully");
            console.log(res)
            console.log("after response")

            this.buildingMaterialForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the material")
            console.log(this.buildingMaterialForm)
            console.log(err)
          }
        })
      }   
      else{
        console.log("nie zwalidowałem się !")  

      }     
    }else{

      this.updateBuildingMaterial()
    }
  }

  updateBuildingMaterial(){
    this.api.updateBuildingMaterial(this.buildingMaterialForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated successfully");
        console.log(res);
        this.buildingMaterialForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        console.log(err);
        alert('Error while updating the record !')
      }
    })
  }  
  
}
