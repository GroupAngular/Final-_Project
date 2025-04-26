import { Component,OnInit ,OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
  isUserPage:boolean = true;
  model={name:"",
    email : "",
   password : "",
   confirmPassword:""
 }
 nameError: string = "";
  emailError: string = "";
  passwordError: string = "";
  confirmPasswordError: string = "";
//  handlesubmit(form:NgForm){
//    if(form.valid){
//      this.log.login(this.model).subscribe((res: any)=>{
//        console.log(res)
//        this.router.navigateByUrl('/terms')
//      })
//          }
//  }
 
   ngOnInit(): void {
  
      document.body.style.backgroundImage = "url('../../public/images/z.jpg')";
      document.body.style.backgroundSize = "cover"; // لجعل الصورة تغطي الشاشة بالكامل
      document.body.style.backgroundPosition = "center"; // لتوسيط الصورة
   
     this.initializeEvents();
   }
   ngOnDestroy() {
  
    document.body.style.backgroundColor = ''; 
  }
   initializeEvents() {
     // Signup toggle event
     const signUpButton = document.getElementById('btn-signup');
     const cancelSignupButton = document.getElementById('cancel_signup');
     const formSignin = document.querySelector('.form-signin') as HTMLElement;
     const formSignup = document.querySelector('.form-signup') as HTMLElement;
     const forgotPasswordLink = document.getElementById('forgot_pswd');
     const cancelResetLink = document.getElementById('cancel_reset');
     const formReset = document.querySelector('.form-reset') as HTMLElement;
 
     if (signUpButton && cancelSignupButton) {
       signUpButton.addEventListener('click', this.toggleSignUp.bind(this, formSignin, formSignup));
       cancelSignupButton.addEventListener('click', this.toggleSignUp.bind(this, formSignup, formSignin));
     }
 
     if (forgotPasswordLink && cancelResetLink) {
       forgotPasswordLink.addEventListener('click', this.toggleResetPswd.bind(this, formSignin, formReset));
       cancelResetLink.addEventListener('click', this.toggleResetPswd.bind(this, formReset, formSignin));
     }
   }
   toggleResetPswd(formToHide: HTMLElement, formToShow: HTMLElement) {
     formToHide.style.display = 'none';
     formToShow.style.display = 'block';
   }
   toggleSignUp(formToHide: HTMLElement, formToShow: HTMLElement) {
     formToHide.style.display = 'none';
     formToShow.style.display = 'block';
   }
 
 
   alertVisible = false; 
 
   constructor(private router: Router,private log : LoginService) {}
   validateName() {
    if (this.model.name.length < 3) {
      this.nameError = "Name must be at least 3 characters";
    } else {
      this.nameError = "";
    }
  }

  // دالة للتحقق من البريد الإلكتروني
  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.model.email)) {
      this.emailError = "Please enter a valid email";
    } else {
      this.emailError = "";
    }
  }

  // دالة للتحقق من كلمة المرور
  validatePassword() {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(this.model.password)) {
      this.passwordError = "Password must be at least 8 characters with letters and numbers";
    } else {
      this.passwordError = "";
    }
  }

  // دالة للتحقق من تأكيد كلمة المرور
  validateConfirmPassword() {
    if (this.model.confirmPassword !== this.model.password) {
      this.confirmPasswordError = "Passwords do not match";
    } else {
      this.confirmPasswordError = "";
    }
  }

  // دالة Submit
  handlesubmit(form: NgForm) {
    this.validateName();
    this.validateEmail();
    this.validatePassword();
    this.validateConfirmPassword();

 
  }

  // دالة لمحاكاة إرسال بريد التفعيل
 
  
   showAlert() {
     this.alertVisible = true;
   }
 
  
   hideAlert() {
     this.alertVisible = false;
   }
 

   navigateToTerms() {
     this.alertVisible = false;  
     this.router.navigate(['/terms']); 
 
   
   }
  
}
