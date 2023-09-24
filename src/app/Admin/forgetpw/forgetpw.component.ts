import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.component.html',
  styleUrls: ['./forgetpw.component.scss']
})
export class ForgetpwComponent {
  forgetpwForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  get user()
  {
    return this.forgetpwForm.get('user'); 
  }

  forgetpw(){
    console.warn(this.forgetpwForm.value)
  }


}
