import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { BuildingMaterial } from 'src/app/models/building-material.model';
import { BuildingMaterialService } from 'src/app/services/building-material.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  deliveryList = [true,false]
  buildingMaterialForm !: FormGroup;
  actionBtn : string = "Save"

  constructor(private formBuilder : FormBuilder, 
    private api: BuildingMaterialService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogComponent>){}

  ngOnInit(): void {
    this.buildingMaterialForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      gammaSW: [0,Validators.required],
      gammaW: [0,Validators.required],
      ro: [0,Validators.required],
      cw: [0,Validators.required],     
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.buildingMaterialForm.controls['name'].setValue(this.editData.name);
      this.buildingMaterialForm.controls['description'].setValue(this.editData.description);
      this.buildingMaterialForm.controls['gammaSW'].setValue(this.editData.gammaSW);
      this.buildingMaterialForm.controls['gammaW'].setValue(this.editData.gammaW);
      this.buildingMaterialForm.controls['ro'].setValue(this.editData.ro);
      this.buildingMaterialForm.controls['cw'].setValue(this.editData.cw);      
    }
  }

  addMaterial(){
    if(!this.editData)
    {
      if(this.buildingMaterialForm.valid){
        console.log(1)
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
    }
  }
  
}
