import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  imageSrc: string = '';

  data!: string;
  

  Users = [{
    "subject": "Maths",
    "title": "Chapter1",
    "image": "Nilu",
    "type": "2",

      
    },
    {
      "subject": "Science",
      "title": "Chapter2",
      "image": "Sharmi",
      "type": "1",
      },
      {
        "subject": "Tamil",
        "title": "Chapter3",
        "image": "Kisho",
        "type": "2",
      },
      {
        "subject": "English",
        "title": "Chapter4",
        "image": "Vimala",
        "type": "1",
      },
  ]
  
  registerForm!: FormGroup;
  submitted = false;
  categoryForm!: any;

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        subject: ['', Validators.required],
        title: ['', Validators.required],
        file: ['', Validators.required],
        type: ['', [Validators.required]],
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
    type: ['', [Validators.required]]
  });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
get n() { return this.categoryForm.controls; }

// onFileChange(event:any) {
//   const reader = new FileReader();
  
//   if(event.target.files && event.target.files.length) {
//     const [file] = event.target.files;
//     reader.readAsDataURL(file);
  
//     reader.onload = () => {
 
//       this.imageSrc = reader.result as string;
   
//       this.registerForm.patchValue({
//         fileSource: reader.result
//       });
 
//     };
 
//   }
// }

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


get subject()
{
  return this.registerForm.get('subject'); 
}

get file()
{
  return this.registerForm.get('file'); 
}

get title()
{
  return this.registerForm.get('title'); 
}

get type()
{
  return this.registerForm.get('type'); 
}
}
