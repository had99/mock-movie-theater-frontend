import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-movie-list',
  templateUrl: './view-movie-list.component.html',
  styleUrls: ['./view-movie-list.component.css']
})
export class ViewMovieListComponent implements OnInit {

  dataSource = new MatTableDataSource<Movie>(movies);
  nameColumn: string [] = [
    'Id',
    'Movie(ENG)',
    'Movie(VN)',
    'Release Date',
    'Movie Production Company',
    'Duration',
    'Version',
    'Detail',
    'Delete',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Movie {
  id: number;
  movieNameENG: string;
  movieNameVN: string;
  releaseDate: string;
  movieProductionCompany: string;
  duration: number;
  version: string;
}

const movies: Movie[] = [
  {id: 1, movieNameENG: 'A', movieNameVN:'Doctor Strange: Phù Thủy Tối Thượng', releaseDate:'18/11/2018', movieProductionCompany:'Marvel Cinematic Universe', duration:116, version:'2D,3D'},
  {id: 2, movieNameENG: 'A', movieNameVN:'Doctor Strange: Phù Thủy Tối Thượng', releaseDate:'12/11/2018', movieProductionCompany:'Marvel Cinematic Universe', duration:116, version:'2D'},
  {id: 3, movieNameENG: 'Avengers Infinity War', movieNameVN:'Avengers: Cuộc Chiến Vô Cực', releaseDate:'25/04/2018', movieProductionCompany:'Marvel Cinematic Universe', duration:150, version:'2D,3D'},
  {id: 4, movieNameENG: 'Doctor Strange', movieNameVN:'Doctor Strange: Phù Thủy Tối Thượng', releaseDate:'09/11/2018', movieProductionCompany:'Marvel Cinematic Universe', duration:116, version:'2D,3D'},
]