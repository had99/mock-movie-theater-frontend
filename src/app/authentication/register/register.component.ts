import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
      comfirmPassword: [''],
      fullName: [''],
      dateOfBirth: [''],
      gender: [''],
      identityCard:[''],
      email:[''],
      address: [''],
      phoneNumber: [''],
    })
  }
  
  get f() { return this.registerForm.controls; }

  register(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    else{
      console.log(this.registerForm.value);
    }
  }
}
