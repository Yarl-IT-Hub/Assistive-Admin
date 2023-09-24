import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LevelService } from 'src/app/services/level.service';

export interface Level {
  title: string,
  Description: string
}

var _level: Level[] = [];
var le: Level;
var LEVELS;

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  data!: string;
  [x: string]: any;
  _LEVELS: any;
  registerForm!: FormGroup;
  submitted = false;
  categoryForm!: FormGroup;



  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private LevelService: LevelService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      title: ['', Validators.required],
      Description: ['', Validators.required],

    });

    this.LevelService.get().subscribe(
      res => {
        LEVELS = res.body;
        LEVELS?.forEach(function (value) {
          le = value;
          _level.push(le);
        });
        console.log(LEVELS)
        this._LEVELS = LEVELS;
      }
    )

  }
  openModal(targetModal: any) {
    this.modalService.open(targetModal, {
      //  centered: true,
      // backdrop: 'static'
    });

    this.categoryForm.patchValue({
      title: [''],
      Description: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get n() { return this.categoryForm.controls; }


  onSubmit() {
    this.modalService.dismissAll();
    this.LevelService.Addlevel(this.registerForm.getRawValue()).subscribe(

      (res: any) => {
        console.log(res.body)
      }
    )
    console.log(this.registerForm.getRawValue());
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
    this.LevelService.delete(this.deleteId).subscribe(
      res => {
        console.log(res.body)
      }
    )
    // this.get();
   }
   
 

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get title() {
    return this.registerForm.get('title');
  }

  get Description() {
    return this.registerForm.get('Description');
  }

}

