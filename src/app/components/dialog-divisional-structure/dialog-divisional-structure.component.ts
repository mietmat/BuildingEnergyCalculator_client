import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { DivisionalStructureService } from 'src/app/services/divisional-structure.service';
import {FormControl} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { BuildingMaterial } from 'src/app/models/building-material.model';


@Component({
  selector: 'app-dialog-divisional-structure',
  templateUrl: './dialog-divisional-structure.component.html',
  styleUrls: ['./dialog-divisional-structure.component.css'], 
 
})

export class DialogDivisionalStructureComponent {

  deliveryList = [true,false]
  divisionalStructureForm !: FormGroup;
  actionBtn : string = "Save";
  materials = new FormControl('');
  public buildingMaterialsAll: any[]=[];
  public materialen: any[] = ["asdsa","dasd"];

  constructor(private formBuilder : FormBuilder, 
    private api: DivisionalStructureService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogDivisionalStructureComponent>,
    public apiMaterials: BuildingMaterialService){} 
    
    
  ngOnInit(): void {     
      this.apiMaterials.getAllMaterials()
      .subscribe(buildingMaterial=>{
        this.buildingMaterialsAll = buildingMaterial;
      }); 

      this.divisionalStructureForm = this.formBuilder.group({
        name: ['',Validators.required],
        description: ['',Validators.required],
        buildingMaterials:[[this.materials]],   
        thickness:[0],
        lambdaSw:[0],
        lambdaW:[0],
        ro:[0],
        cw:[0],
        Rsi:0,
        Rse:0,
        U:0,
      });

    // if(this.editData){
    //   this.actionBtn = "Update";
    //   this.divisionalStructureForm.controls['name'].setValue(this.editData.name);
    //   this.divisionalStructureForm.controls['description'].setValue(this.editData.description);
    //   this.divisionalStructureForm.controls['buildingMaterials'].setValue(this.editData.buildingMaterials);

    // }
  }

  onMaterialSelectionChange() {
    console.log(this.materials.value); // wyświetla wybrane wartości
    
  } 

  addDivisionalStructure(){
    if(!this.editData)
    {
      if(this.divisionalStructureForm.valid){
        console.log("KROK1") 
        const formValues = this.divisionalStructureForm.value;
        formValues.buildingMaterials = this.materials.value;

        this.api.addDivisionalStructure(formValues)
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
            console.log(this.divisionalStructureForm.value)
            console.log(err)
            console.log(this.materials.value)
          }
        })
      }   
      else{
        console.log("nie zwalidowałem się !")  

      }     
    }
  }
}
