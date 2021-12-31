import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  submitted = false;
  editMovieInformationForm!: FormGroup;
  DataTypeMovies: Array<any> = [
    { name: 'Hành động', value: 'hanhdong', checked: false },
    { name: 'Hài hước', value: 'haihuoc', checked: false },
    { name: 'Lãng mạn', value: 'langman', checked: false },
    { name: 'Tình cảm', value: 'tinhcam', checked: false },
    { name: 'Viễn tưởng', value: 'vientuong', checked: false },
    { name: 'Chiến tranh', value: 'chientranh', checked: false },
    { name: 'Kiếm hiệp', value: 'kiemhiep', checked: false },
    { name: 'Âm nhạc', value: 'amnhac', checked: false },
    { name: 'Kinh dị', value: 'kinhdi', checked: false },
    { name: 'Phiêu lưu', value: 'phieuluu', checked: false },
    { name: 'Tâm lý 18+', value: 'tamly18plus', checked: false },
    { name: 'Hoạt hình', value: 'hoathinh', checked: false },
  ];

  DataSchedules: Array<any> = [
    { time: '08:00', value: '1', checked: false },
    { time: '09:00', value: '2', checked: false },
    { time: '10:00', value: '3', checked: false },
    { time: '11:00', value: '4', checked: false },
    { time: '13:30', value: '5', checked: false },
    { time: '14:30', value: '6', checked: false },
    { time: '15:00', value: '7', checked: false },
    { time: '17:00', value: '8', checked: false },
    { time: '18:30', value: '9', checked: false },
    { time: '19:00', value: '10', checked: false },
    { time: '20:00', value: '11', checked: false },
    { time: '21:00', value: '12', checked: false },
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editMovieInformationForm = this.formBuilder.group({
      movieNameENG: [''],
      movieNameVN: [''],
      fromDate: [''],
      toDate: [''],
      actor: [''],
      movieProductionCompany: [''],
      director: [''],
      duration: [''],
      version: [''],
      types: this.formBuilder.array([], [Validators.required]),
      cinemaRoom: [''],
      schedule: [''],
      content: [''],
      image: [''],
    })
  }

  get f() { return this.editMovieInformationForm.controls; }

  editMovieInfomation() {
    this.submitted = true;
    if (this.editMovieInformationForm.invalid) {
      return;
    }
    else {
      console.log(this.editMovieInformationForm.value);
    }
  }

  uploadFileEvt(event: any) {

  }

  onCheckBonxChangeTypeMovie(e: any) {

  }

  onCheckBonxChangeScheduleMovie(e: any) {

  }
}
