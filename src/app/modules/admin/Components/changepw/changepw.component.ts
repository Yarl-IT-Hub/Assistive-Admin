import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.scss']
})
export class ChangepwComponent {
  public inputType:string = 'text';
  public showPassword(event:any):void{
   event.target.checked ? this.inputType = 'text' : this.inputType = 'password';
 }
 changepwForm = new FormGroup({
  password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
})
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  changepw(){
    console.warn(this.changepwForm.value)
  }

  get password()
  {
    return this.changepwForm.get('password'); 
  }
  get confirmpassword()
  {
    return this.changepwForm.get('confirmpassword'); 
  }

}
