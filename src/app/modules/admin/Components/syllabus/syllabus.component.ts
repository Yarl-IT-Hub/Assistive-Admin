import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {
  data!: string;

  Users = [{

    "title": "Chapter1",
    "image": "Nilu",
    "video": "nilu.mp4",
    "description": "Book",
    "subject": "Sinhala",



  },
  {
    "title": "Chapter2",
    "image": "Thanu",
    "video": "nilu.mp4",
    "description": "Book",
    "subject": "English",
  },
  {
    "title": "Chapter3",
    "image": "Shar",
    "video": "nilu.mp4",
    "description": "Pen",
    "subject": "Tamil",
  },
  {
    "title": "Chapter4",
    "image": "Ravi",
    "video": "nilu.mp4",
    "description": "Pencil",
    "subject": "Maths",
  },
  ]

  registerForm!: FormGroup;
  submitted = false;
  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: ['', Validators.required],
      video: ['', Validators.required],
      Description: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  openModal(targetModal: any) {
    this.modalService.open(targetModal, {
      //  centered: true,
      // backdrop: 'static'
    });

    this.categoryForm = this.formBuilder.group({
      title: ['Nilu', Validators.required],
      file: ['', Validators.required],
      video: ['', Validators.required],
      Description: ['Rajes', Validators.required],
      subject: ['', Validators.required],

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
videoUrl:any;

handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);

  //Show image preview
  let reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}

  url:any;
  format:any;
  
  onSelectFile(event:any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  
  get title() {
    return this.registerForm.get('title');
  }

  get subject() {
    return this.registerForm.get('subject');
  }

  get file() {
    return this.registerForm.get('file');
  }
  get video() {
    return this.registerForm.get('video');
  }

  get Description() {
    return this.registerForm.get('Description');
  }
}
