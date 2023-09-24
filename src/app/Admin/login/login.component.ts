import { error } from '@angular/compiler/src/util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  submitted = false;
  [error: string]: any;
  returnUrl!: string;
  loading = false;
  public errorMessage : string | undefined = undefined;
   public inputType:string = 'password';
   public showPassword(event:any):void{
    event.target.checked ? this.inputType = 'text' : this.inputType = 'password';
  }
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email ]),
    password:new FormControl('',[Validators.required,Validators.minLength(6) ]),
  })
  
  constructor(private auth: AuthService, private router: Router) {
    // error:String
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  loginUser(data:any){
    console.log(data)
    
  }
  onSubmit() {
    this.submitted = true;
    this.auth.login({
      "email" : this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    )
    .subscribe(

      (res:any) => {
        console.log(res)
        if(res.body['token'] != null){
          this.router.navigate(['/admin']);
        }
      },
      (error) =>{
        console.log("These credentials do not match our records.")
        this.error = error;
      }
    )
    
  }
  get email()
  {
    return this.loginForm.get('email'); 
  }

  get password()
  {
    return this.loginForm.get('password'); 
  }
}