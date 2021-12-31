import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-member-account',
  templateUrl: './edit-member-account.component.html',
  styleUrls: ['./edit-member-account.component.css']
})
export class EditMemberAccountComponent implements OnInit {

  submitted = false;
  editInformationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editInformationForm  = this.formBuilder.group({
      account: ['',{disable: true}],
      password: [''],
      confirmPassword: [''],
      fullName: [''],
      dateOfBirth: [''],
      gender: [''],
      identityCard: ['' ,{disable: true}],
      email: [''],
      address: [''],
      phoneNumber: [''],
      image: [''],
    })
  }

  get f() { return this.editInformationForm.controls; }

  editInformationAccount(){
    this.submitted = true;
    if(this.editInformationForm.invalid){
      return;
    }
    else{
      console.log(this.editInformationForm.value);
    }
  }

  uploadFileEvt(event: any){

  }

}
