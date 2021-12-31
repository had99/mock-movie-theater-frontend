import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  submitted = false;
  addNewMovieForm!: FormGroup;
  types!: any[];
  typeMovieForm!: FormGroup;
  Data: Array<any> = [
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
    this.addNewMovieForm = this.formBuilder.group({
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
    });
  }

  get f() { return this.addNewMovieForm.controls; }

  addNewMovie() {
    this.submitted = true;
    if (this.addNewMovieForm.invalid) {
      return;
    }
    else {
      console.log(this.addNewMovieForm.value);
    }
  }

  uploadFileEvt(event: any) {

  }

  onCheckBonxChangeTypeMovie(e: any) {
    // const types: FormArray = this.typeMovieForm.get('types') as FormArray;
    // if (e.target.checked) {
    //   types.push(new FormControl(e.target.value));
    // } else {
    //   let i: number = 0;
    //   types.controls.forEach((item: FormControl) => {
    //       if (item.value == e.target.value) {
    //         types.removeAt(i);
    //         return;
    //       }
    //       i++;
    //     });
    // }
  }

  onCheckBonxChangeScheduleMovie(e: any) {

  }
}
