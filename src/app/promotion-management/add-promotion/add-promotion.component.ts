import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

  submitted = false;
  addNewPromotionForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addNewPromotionForm = this.formBuilder.group({
      title: [''],
      startTime: [''],
      endTime: [''],
      discountLevel: [''],
      detail: [''],
      image: [''],
    });
  }

  get f() { return this.addNewPromotionForm.controls; }

  addNewPromotion() {
    this.submitted = true;
    if (this.addNewPromotionForm.invalid) {
      return;
    }
    else {
      console.log(this.addNewPromotionForm.value);
    }
  }

  uploadFileEvt(event: any) {

  }

}
