import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit {

  dataSource = new _MatTableDataSource<Employee>(employees);
  nameColumn: string [] = [
    '#',
    'Username',
    'Full name',
    'Date of birth',
    'Gender',
    'Email',
    'Identity card',
    'Phone number',
    'Address',
    'Register date',
    'Edit',
    'Delete'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Employee {
  id: number;
  userName: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  identityCard: number;
  phoneNumber: number;
  address: string;
  registerDate: string;
}

const employees: Employee [] = [
  {id:1,userName:'BVN',fullName:'Nguyen Van B',dateOfBirth:'1994-09-08',gender:'F',email:'b123@gmail.com',identityCard:123, phoneNumber:6, address:'Ha Noi',registerDate:'2020-09-08',},
  {id:2,userName:'CVN',fullName:'Nguyen Van C',dateOfBirth:'1994-05-11',gender:'M',email:'c456@gmail.com',identityCard:234, phoneNumber:5, address:'Hue',registerDate:'2019-09-08',},
]