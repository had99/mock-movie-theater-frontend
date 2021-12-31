import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submitted = false;
  addNewEmployeeForm!: FormGroup;
  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.addNewEmployeeForm = this.formBuider.group({
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

  get f() { return this.addNewEmployeeForm.controls; }

  addNewEmployee(){
    this.submitted = true;
    if(this.addNewEmployeeForm.invalid){
      return;
    }
    else{
      console.log(this.addNewEmployeeForm.value);
    }
  }

  uploadFileEvt(event: any){

  }
}
