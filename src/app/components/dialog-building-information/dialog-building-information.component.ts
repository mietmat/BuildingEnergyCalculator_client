import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AuthService } from 'src/app/services/auth-service.service';
import { BuildingInformationService } from 'src/app/services/building-information.service';
import { BuildingMaterialService } from 'src/app/services/building-material.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-building-information.component.html',
  styleUrls: ['./dialog-building-information.component.css']
})
export class DialogBuildingInformationComponent implements OnInit{
  deliveryList = [true,false]
  buildingInformationForm: FormGroup;
  // buildingInformationForm: FormGroup = new FormGroup({
  //     name: new FormControl(''),
  //     description: new FormControl(''),
  //     address:new FormGroup({
  //       city: new FormControl(''),
  //       street: new FormControl(''),
  //       postalCode: new FormControl(''),

  //     }),

  //     investor:new FormGroup({
  //       name: new FormControl(''),
  //       lastName: new FormControl(''),
  //       phoneNumber: new FormControl(''),
  //       email: new FormControl(''),
  //       address:new FormGroup({
  //         city: new FormControl(''),
  //         street: new FormControl(''),
  //         postalCode: new FormControl(''),
  
  //       })
  //     })
  // });
  actionBtn : string = "Save"
  public role!:string;    

  constructor(private formBuilder : FormBuilder, 
    private api: BuildingInformationService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogBuildingInformationComponent>,
    private auth: AuthService,
    private userStore: UserStoreService){
      this.buildingInformationForm = this.formBuilder.group({
        name: [''],
        description: [''],
        address: this.formBuilder.group({
          city: [''],
          street: [''],
          postalCode: ['']
        }),
        investor: this.formBuilder.group({
          name: [''],
          lastName: [''],
          phoneNumber: [''],
          email: [''],
          address: this.formBuilder.group({
            city: [''],
            street: [''],
            postalCode: ['']
          })
        })
      });
      
    }

  ngOnInit(): void {
    // this.buildingInformationForm = new FormGroup({
    //   name: new FormControl(''),
    //   description: new FormControl(''),
    //   address:new FormGroup({
    //     city: new FormControl(''),
    //     street: new FormControl(''),
    //     postalCode: new FormControl(''),

    //   }),
    //   investor: new FormGroup({
    //     name: new FormControl(''),
    //     lastName: new FormControl(''),
    //     phoneNUmber: new FormControl(''),
    //     address:new FormGroup({
    //       city: new FormControl(''),
    //       street: new FormControl(''),
    //       postalCode: new FormControl(''),
  
    //     })
    //   })
      
         
           
    // });

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

  addBuildingInformation(){
    if(!this.editData)
    {
      if(this.buildingInformationForm.valid){
        console.log(this.buildingInformationForm.value)
        console.log("sent to backend")
        this.api.addBuildingInformation(this.buildingInformationForm.value)
        .subscribe({
          next:(res)=>{
            alert("Building information added successfully");
            console.log(res)
            console.log("after response")

            this.buildingInformationForm.reset();
            this.dialogRef.close('save');
          },
         error:(err)=>{
            alert("Error while adding the building information")
            console.log("FORM: " + this.buildingInformationForm)
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
    this.api.updateBuildingInformation(this.buildingInformationForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Building information updated successfully");
        console.log(res);
        this.buildingInformationForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        console.log(err);
        alert('Error while updating the record !')
      }
    })
  }  
  
}
