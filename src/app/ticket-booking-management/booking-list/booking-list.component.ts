import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  dataSource = new MatTableDataSource<BookingList>(bookingList);
  nameColumn: string [] = [
    '#',
    'Booking ID',
    'Member ID',
    'Full name',
    'Identity card',
    'Phone number',
    'Movie',
    'Time',
    'Seat',
    'Status',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface BookingList {
  bookingID: string;
  memberID: string;
  fullName: string;
  identityCard: string;
  phoneNumber: string;
  movie: string;
  time: string;
  seat: string;
  status: string;
}

const bookingList: BookingList [] = [
  {bookingID:'SKi435MNkd', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'2D 2E 2F', status:'Successful booking'},
  {bookingID:'Asd123qwer', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'1D 1E 1F',status:'Get tiket'},
  {bookingID:'aszi13RPNE', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'8D',status:'Successful booking'},
  {bookingID:'PNJJ123neb', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'3A 2F',status:'Successful booking'},
  {bookingID:'691asdPLOD', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'1D 4E 3F',status:'Successful booking'},
  {bookingID:'019qweasdb', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'5D 3E 9F',status:'Successful booking'},
  {bookingID:'ninDJBHU00', memberID:'4cAcpO0hNM', fullName:'Tran Van Tien', identityCard:'123456789', phoneNumber:'09773123777',movie:'Doctor Strange: Phù Thủy Tối Thượng', time:'01/12/2018 - 21:00', seat:'2A 4E 7F',status:'Successful booking'},
]