import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.css']
})
export class EditPromotionComponent implements OnInit {

  submitted = false;
  editPromotionForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editPromotionForm = this.formBuilder.group({
      title: [''],
      startTime: [''],
      endTime: [''],
      discountLevel: [''],
      detail: [''],
      image: [''],
    });
  }

  get f() { return this.editPromotionForm.controls; }

  editPromotionInformation() {
    this.submitted = true;
    if (this.editPromotionForm.invalid) {
      return;
    }
    else {
      console.log(this.editPromotionForm.value);
    }
  }

  uploadFileEvt(event: any) {

  }
}
