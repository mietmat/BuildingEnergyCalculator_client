import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ResetPassword } from 'src/app/models/reset-password.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import ValidateForm from 'src/app/helpers/validateForm';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  public resetPasswordEmail!: string;
  public isValidEmail!: boolean;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router, 
    private toast: NgToastService,
    private userStore: UserStoreService,
    private resetService: ResetPasswordService
    ) { }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
      })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
      // Send the obj to database
      this.auth.signIn(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          //alert(res.message);
          console.log(res.message);
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.toast.success({detail:"SUCCESS", summary:res.message, duration:3000});
          this.router.navigate([''])
        },
        error:(err)=>{          
          //alert(err.message)
          this.toast.error({detail:"ERROR", summary:"Something went wrong!", duration:3000})
          console.log(err);
        }
      })
    }
    else{
      console.log("Form is not valid")
      //throw the error
      ValidateForm.validateAllFormFields(this.loginForm)
      //alert("Your form is invalid")
    }
  }

  checkValidEmail(event: string){
    const value = event;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/; //checking if this is email or not
    this.isValidEmail = pattern.test(value);
 
    return this.isValidEmail;
  }

  confirmToSend(){
    if(this.checkValidEmail(this.resetPasswordEmail)){
      console.log(this.resetPasswordEmail);
     
      //API call to be done
      this.resetService.sendResetPasswordLink(this.resetPasswordEmail)
      .subscribe({
        next:(res)=>{
          this.toast.success({
            detail:'Success',
            summary: 'Reset Success!',
            duration: 3000,
          })
          this.resetPasswordEmail = "";
          const buttonRef = document.getElementById("closeBtn");
          buttonRef?.click();
        },
        error:(err)=>{
          this.toast.error({
            detail:'ERROR',
            summary: 'Something went wrong!',
            duration: 3000,
          })
        }
      })
    }
  }
}
