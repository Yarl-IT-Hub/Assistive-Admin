import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeService } from 'src/app/services/type.service';
import { environment } from 'src/environments/environment';

export interface Type {
  title: string,
  Description: string
}

var _qtype: Type[] = [];
var type1: Type;
var Types;

@Component({
  selector: 'app-questiontype',
  templateUrl: './questiontype.component.html',
  styleUrls: ['./questiontype.component.scss']
})
export class QuestiontypeComponent implements OnInit {
  baseUrl = environment.baseUrl;

  filedata:any;
  data!: string;

  Users = [{
      "title": "Title",
      "description": "Nilu",
      
    },
    {
        "title": "Title",
        "description": "Sharmi",
      },
      {
        "title": "Title",
        "description": "Surya",
      },
      {
        "title": "Title",
        "description": "Vikram",
      },
  ]
  registerForm!: FormGroup;
  submitted = false;
  categoryForm!: FormGroup;
  postId:any;
  [x: string]: any;
  imageURL!: string;
  _qtype: any;


  constructor(private formBuilder: FormBuilder,private modalService: NgbModal,private user :TypeService,private http: HttpClient) { 
}


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      Description: ['', Validators.required],
    
  },
   {
  });
  this.user.get().subscribe(
    res => {
      Types = res.body;
      Types?.forEach(function (value) {
       type1 = value;
       _qtype.push(type1);
      });
      console.log( Types)
      this. _qtype =  Types;
    }
  )
  }

  get(){
    this.user.get().subscribe(data=>{
      console.log(data)
    })
  }
  openModal(targetModal: any) {
    
    this.modalService.open(targetModal, {
      //  centered: true,
      // backdrop: 'static'
    });
  
    this.categoryForm = this.formBuilder.group({
      title: ['Nilu', Validators.required],
      Description: ['Rajes', Validators.required],
  
    });
  }
  
 addModal(addTypeModal: any) {
  
  this.modalService.open(addTypeModal, {
  //  centered: true,
   backdrop: 'static'
  });
 
  this.registerForm.patchValue({
   title: [''],
   description:[''],
 
  });
 }

 deleteModal(deleteModals: any, i: any){
  this.modalService.open(deleteModals, {
    //  centered: true,
    //  backdrop: 'static'
    });
    this.deleteId = i;
   //console.log(`deleted`, i)
 }
 

 delete(){

  this.modalService.dismissAll();
  this.user.delete(this.deleteId).subscribe(
    res => {
      console.log(res.body)
    }
  )
  // this.get();
 }
 
  // onSubmit() {
  //     this.submitted = true;

  //     //stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     } 
  //     // display form values on success
  //     //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  //     console.log(this.registerForm.value)
  // }
  

  onSubmit() {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    if(this.registerForm.getRawValue()){
      // myFormData.append('mainCategoryId', this.mainCategorySelectedId);
      // myFormData.append('title', this.registerForm.getRawValue().title);
      // myFormData.append('Description', this.registerForm.getRawValue().Description);

      var formData = {
        'title' : this.registerForm.getRawValue().title
      }
      // myFormData.append('moreCategory', "0");
      // myFormData.append('image', this.filedata);
      /* Image Post Request */
      this.http.post(this.baseUrl + 'types', formData, {
      headers: headers
      }).subscribe(data => {
        console.log(data)
      });  
    } else {
      // myFormData.append('id', this.categoryForm.getRawValue().id);
      // myFormData.append('mainCategoryId', this.mainCategorySelectedId);
      myFormData.append('title', this.registerForm.getRawValue().title);
      myFormData.append('Description', this.registerForm.getRawValue().Description);
      // myFormData.append('moreCategory', "0");
      // myFormData.append('image', this.filedata);
      /* Image Post Request */
      this.http.post(this.baseUrl + 'update', myFormData, {
      headers: headers
      }).subscribe(data => {
        console.log(data)
      });  
    }
  
    // this.imageURL = ''
    this.modalService.dismissAll();
    this.get();
  }
 
  onProceed() {
    this.submitted = true;
  
    //stop here if form is invalid
    if (this.categoryForm.invalid) {
      return;
    }
  
  
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.categoryForm.value, null, 4));
  
  }
  onCancel() {
    this.submitted = false;
    this.categoryForm.reset();
  
  }
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


  get title()
  {
    return this.registerForm.get('title'); 
  }
  
  get Description()
  {
    return this.registerForm.get('Description'); 
  }
}