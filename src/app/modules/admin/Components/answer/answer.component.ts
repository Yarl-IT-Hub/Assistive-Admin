import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
    data!: string;

  Users = [{
    "question": "01",
    "title": "Chapter1",
    "image": "Nilu",
    "answer": "Yes",

      
    },
    {
        "question": "02",
        "title": "Chapter2",
        "image": "Rajeswaran",
        "answer": "No",
      },
      {
        "question": "03",
        "title": "Chapter3",
        "image": "Thanu",
        "answer": "Yes",
      },
      {
        "question": "04",
        "title": "Chapter4",
        "image": "Kisho",
        "answer": "No",
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
        answer: ['', [Validators.required]],
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
    answer: ['', [Validators.required]],

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

get answer()
{
  return this.registerForm.get('answer'); 
}
}
