import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})


export class GradeComponent implements OnInit {
  data!: string;

  Users = [{

    "title": "Chapter1",
    "image": "Nilu",
  },
  {
    "title": "Chapter2",
    "image": "Sharmi",
  },
  {
    "title": "Chapter3",
    "image": "Kisho",
  },
  {
    "title": "Chapter4",
    "image": "Vimala",
  },
  ]

  registerForm!: FormGroup;
  submitted = false;
  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title:new FormControl('',[Validators.required ]),
      file:new FormControl('',[Validators.required]),
    }, {
    });
  }
  openModal(targetModal: any) {
    this.modalService.open(targetModal, {
        
      
    });

    this.categoryForm = this.formBuilder.group({

      title: ['Nilu', Validators.required],

      file: ['', [Validators.required]],

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get n() { return this.categoryForm.controls; }



  onSubmit() {
    this.submitted = true;

    //stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
   
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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

fileToUpload: any;
imageUrl: any;
handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);

  //Show image preview
  let reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}

get title()
{
  return this.registerForm.get('title'); 
}

get file()
{
  return this.registerForm.get('file'); 
}


}