import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  public contador: number = 1000;

  public tvShows: Show[] = []

  public tvShows2: Show[] = this.tvShows

  public show: Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: '',
    year: 0
  };
  


  //inyectamos
  constructor(private http: HttpClient) { }

  public delete(value: number): void {
    console.log("Click en eliminar tarjeta desde el servicio");
    this.tvShows.splice(value, 1);


  }

  public searchByTerm(value: string) {
    this.fetchTvShows(value);
  }

  public incrementa(): void {
    this.contador++;
  }

  public decrementa(): void {
    this.contador--;
  }

  public setAllAs(value: boolean): void {
    this.tvShows.forEach(item => item.isSelected = value);
    console.log("Accion desde el servicio");
  }

  public onClickChangeOrder(): void {
    console.log("Se invierten tarjetas desde el servicio");
    this.tvShows.reverse();

  } private apiUrl = 'http://localhost:8080/api/tvshows';


  public onClickShowInfo(id: number): void {
    this.getTvShowById(id).subscribe({
      next: (response:any) => {
        this.show.title = response.result.title;
        this.show.image = response.result.image;
        this.show.episodes = response.result.episodes;
        this.show.year =response.result.year;
        console.log(response.result.id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public getTvShowById(id: number) {
    return this.http.get<Show>(`${this.apiUrl}/${id}`);
  }

  public fetchTvShows(searchTerm = ""): void {
    //observable que checa que sea exitoso
    this.http.get("http://localhost:8080/api/tvshows?searchTerm=" + searchTerm).subscribe({
      next: (response: any) => {
        this.tvShows = response.result;
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }
}