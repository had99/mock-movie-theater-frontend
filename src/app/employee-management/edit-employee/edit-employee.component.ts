import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  submitted = false;
  editEmployeeForm!: FormGroup;
  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.editEmployeeForm = this.formBuider.group({
      account: [''],
      password: [''],
      confirmPassword: [''],
      fullName: [''],
      dateOfBirth: [''],
      gender: [''],
      identityCard: [''],
      email: [''],
      address: [''],
      phoneNumber: [''],
      image: [''],
    })
  }

  get f() { return this.editEmployeeForm.controls; }

  editEmployee(){
    this.submitted = true;
    if(this.editEmployeeForm.invalid){
      return;
    }
    else{
      console.log(this.editEmployeeForm.value);
    }
  }

  uploadFileEvt(event: any){

  }
}
