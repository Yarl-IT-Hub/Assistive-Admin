import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  data!: string;

  Users = [{
    "grade": 6,
    "title": "Chapter1",
    "image": "Nilu",
    "description": "Book",

      
    },
    {
      "grade": 7,
      "title": "Chapter2",
      "image": "Sharmi",
      "description": "Table",
    },
      {
        "grade": 8,
        "title": "Chapter3",
        "image": "Kisho",
        "description": "Pencil",
      },
      {
        "grade": 9,
        "title": "Chapter4",
        "image": "Vimala",
        "description": "Pen",
      },
  ]
  
  registerForm!: FormGroup;
  submitted = false;
  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        subject: ['', Validators.required],
        title: ['', Validators.required],
        file: ['', Validators.required],
        Description: ['', [Validators.required]],
    }, {
    });
}
openModal(targetModal: any) {
  this.modalService.open(targetModal, {
    //  centered: true,
    // backdrop: 'static'
  });

  this.categoryForm = this.formBuilder.group({
         subject: ['', Validators.required],
        title: ['Nilu', Validators.required],
        file: ['', Validators.required],
        Description: ['Rajes', [Validators.required]],

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

get subject()
{
  return this.registerForm.get('subject'); 
}

get file()
{
  return this.registerForm.get('file'); 
}

get Description()
{
  return this.registerForm.get('Description'); 
}
}
