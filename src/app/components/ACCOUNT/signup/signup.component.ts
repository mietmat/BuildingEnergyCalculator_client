import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: NgToastService )
  {

  }

  ngOnInit():void{
      this.signUpForm = this.fb.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirmPassword:['',Validators.required],
        dateOfBirth:['',Validators.required],
        nationality:['',Validators.required]
      })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignUp(){
    if(this.signUpForm.valid)
    {
      // console.log(this.signUpForm.value)
      // Send the obj to database
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          // alert(res.message)
          this.toast.success({detail:"SUCCESS", summary:res.message, duration:5000})
          this.signUpForm.reset();
          this.router.navigate(['building-energy/login']);
        },
        error:(err)=>{
          //alert(err?.error.message)
          this.toast.error({detail:"ERROR", summary:"Something went wrong!", duration:5000})
          console.log(err);
        }
      })
    }
    else{
      console.log("Form is not valid")
      //throw the error
      ValidateForm.validateAllFormFields(this.signUpForm)
      alert("Your form is invalid")
    }
  }
 

}