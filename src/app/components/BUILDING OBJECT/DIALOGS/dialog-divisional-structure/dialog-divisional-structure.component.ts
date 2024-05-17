import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { DivisionalStructureService } from 'src/app/services/divisional-structure.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-dialog-divisional-structure',
  templateUrl: './dialog-divisional-structure.component.html',
  styleUrls: ['./dialog-divisional-structure.component.css']
})

export class DialogDivisionalStructureComponent {
  deliveryList = [true, false]
  divisionalStructureForm !: FormGroup;
  actionBtn: string = "Save";
  materials = new FormControl('');
  public buildingMaterialsAll: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private api: DivisionalStructureService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogDivisionalStructureComponent>,
    public apiMaterials: BuildingMaterialService,
    public divisionalStructure: DivisionalStructureService) { }


  ngOnInit(): void {

    this.apiMaterials.getAllMaterials()
      .subscribe(buildingMaterial => {
        this.buildingMaterialsAll = buildingMaterial;
        console.log("Pobrane materiały:" + buildingMaterial)
      });

    this.divisionalStructureForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      buildingMaterials: this.materials,
      lambdaSw: [0],
      lambdaW: [0],
      ro: [0],
      cw: [0],
      rsi: [0, Validators.required],
      rse: [0],
      u: 0,
    });

    if (this.editData) {
      console.log("EDITDATA:", this.editData)
      this.actionBtn = "Update";
      this.divisionalStructureForm.controls['name'].setValue(this.editData.name);
      this.divisionalStructureForm.controls['description'].setValue(this.editData.description);
      this.divisionalStructureForm.controls['rsi'].setValue(this.editData.rsi);
      this.divisionalStructureForm.controls['rse'].setValue(this.editData.rse);
      this.materials.setValue(this.editData.buildingMaterials);
    }



  }

  compareMaterials(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onMaterialSelectionChange() {
    console.log(this.materials.value);

  }

  addDivisionalStructure() {
    if (!this.editData) {
      if (this.divisionalStructureForm.valid) {
        const formValues = this.divisionalStructureForm.value;
        formValues.buildingMaterials = this.materials.value;

        this.api.addDivisionalStructure(formValues)
          .subscribe({
            next: (res) => {
              alert("Divisional structure added successfully");
              console.log(res)
              console.log("after response")

              this.divisionalStructureForm.reset();
              this.dialogRef.close('save');
            },
            error: (err) => {
              alert("Error while adding the divisional structure")
              console.log(this.divisionalStructureForm.value)
              console.log(err)
              console.log(this.materials.value)
            }
          })
      }
      else {
        console.log("nie zwalidowałem się !")

      }
    }
    else {
      console.log("UPDATE")

      this.updateStructure()
    }
  }

  updateStructure() {
    if (this.divisionalStructureForm.valid) {
      const formValues = this.divisionalStructureForm.value;
      formValues.buildingMaterials = this.materials.value;

      this.api.updateStructure(formValues, this.editData.id)
        .subscribe({
          next: (res) => {
            console.log("UPDATED:" + res);
            alert("Product updated successfully");
            this.divisionalStructureForm.reset();
            this.dialogRef.close('update');
          },
          error: (err) => {
            console.log(err)
            alert('Error while updating the record !')
          }
        })
    }
    else {
      console.log("nie zwalidowałem się !")
    }

  }
}
