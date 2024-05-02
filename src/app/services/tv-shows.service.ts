import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  public contador: number = 1000;

  public tvShows: Show[] = [{
    "title": "Adventure Time",
    "year": 2010,
    "episodes": 289,
    "image": "https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
    "id": 7
  }, {
    "title": "Pokemon",
    "year": 1997,
    "episodes": 1131,
    "image": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg",
    "id": 8
  }, {
    "title": "Yu-Gi-Oh!",
    "year": 2000,
    "episodes": 225,
    "image": "https://m.media-amazon.com/images/M/MV5BMDM0MDA3NzYtMDE1MS00YjZmLWJmNjQtNzgxYzlhMmMyZjQ2XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "id": 9
  }, {
    "title": "Rugrats",
    "year": 1990,
    "episodes": 179,
    "image": "https://i.kinja-img.com/gawker-media/image/upload/t_original/lseuxpzwkntjf0coatv2.jpg",
    "id": 10
  },
  {
    "title": "My Little Pony: Friendship is Magic",
    "year": 2010,
    "episodes": 235,
    "image": "https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
    "id": 11
  }, {
    "title": "Ed, Edd n Eddy",
    "year": 1999,
    "episodes": 80,
    "image": "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
    "id": 12
  }, {
    "title": "Courage the Cowardly Dog",
    "year": 1999,
    "episodes": 52,
    "image": "https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
    "id": 13
  }, {
    "title": "The New Adventures of Winnie the Pooh",
    "year": 1988,
    "episodes": 50,
    "image": "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "id": 14
  }]

  public tvShows2 : Show[] = this.tvShows

  constructor() { }

  public delete(value: number): void {
    console.log("Click en eliminar tarjeta desde el servicio");
    this.tvShows.splice(value, 1);
  
  
  }

  public searchByTerm( value: string ){
    this.tvShows = this.tvShows2.filter( item => item.title.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
  }

  public incrementa(): void {
    this.contador++;
  }

  public decrementa(): void {
    this.contador--;
  }
}