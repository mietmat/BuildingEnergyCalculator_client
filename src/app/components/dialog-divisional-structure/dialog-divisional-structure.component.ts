import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { DivisionalStructureService } from 'src/app/services/divisional-structure.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-dialog-divisional-structure',
  templateUrl: './dialog-divisional-structure.component.html',
  styleUrls: ['./dialog-divisional-structure.component.css'], 
 
})

export class DialogDivisionalStructureComponent {

  deliveryList = [true,false]
  divisionalStructureForm !: FormGroup;
  actionBtn : string = "Save";
  buildingMaterials = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private formBuilder : FormBuilder, 
    private api: DivisionalStructureService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogDivisionalStructureComponent>){}

  ngOnInit(): void {
    this.divisionalStructureForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      buildingMaterials: [[''],Validators.required]
           
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.divisionalStructureForm.controls['name'].setValue(this.editData.name);
      this.divisionalStructureForm.controls['description'].setValue(this.editData.description);
      this.divisionalStructureForm.controls['buildingMaterials'].setValue(this.editData.buildingMaterials);
           
    }
  }

  addDivisionalStructure(){
    if(!this.editData)
    {
      if(this.divisionalStructureForm.valid){
        console.log(1)
        this.api.addDivisionalStructure(this.divisionalStructureForm.value)
        .subscribe({
          next:(res)=>{
            alert("Divisional structure added successfully");
            console.log(res)
            console.log("after response")

            this.divisionalStructureForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the divisional structure")
            console.log(this.divisionalStructureForm)
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
