import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-promotion-list',
  templateUrl: './view-promotion-list.component.html',
  styleUrls: ['./view-promotion-list.component.css']
})
export class ViewPromotionListComponent implements OnInit {

  dataSource = new MatTableDataSource<Promotion>(promotions);
  nameColumn: string [] = [
    '#',
    'Pronmotion ID',
    'Title',
    'Start Time',
    'End Time',
    'Discount Level',
    'Detail',
    'Edit',
    'Delete',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Promotion {
  promotionID: number;
  title: string;
  startTime: string;
  endTime: string;
  discountLevel: number;
  detail: string;
}

const promotions: Promotion[] = [
  {promotionID:1, title:'Khuyến mãi năm mới', startTime:'06/11/2018', endTime:'30/11/2018', discountLevel:5.00, detail:'Chúc mừng năm mới'},
  {promotionID:4, title:'Khuyến mãi năm mới', startTime:'06/11/2018', endTime:'07/11/2018', discountLevel:50.000, detail:'Chúc mừng năm mới'},
  {promotionID:7, title:'Khuyến mãi năm mới', startTime:'06/11/2018', endTime:'07/11/2018', discountLevel:50.000, detail:'Chúc mừng năm mới'},
  {promotionID:8, title:'Khuyến mãi năm mới', startTime:'17/11/2018', endTime:'30/11/2018', discountLevel:50.000, detail:'Chúc mừng năm mới'},
  {promotionID:9, title:'Khuyến mãi năm mới', startTime:'06/11/2018', endTime:'07/11/2018', discountLevel:50.000, detail:'Chúc mừng năm mới'},
]