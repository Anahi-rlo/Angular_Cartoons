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

  //inyectamos
  constructor(private http: HttpClient) { }

  public delete(value: number): void {
    console.log("Click en eliminar tarjeta desde el servicio");
    this.tvShows.splice(value, 1);


  }

  public searchByTerm(value: string) {
    this.tvShows = this.tvShows2.filter(item => item.title.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
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
  }

  public fetchTvShows(): void {
    //observable que checa que sea exitoso
    this.http.get("http://localhost:8080/api/tvshows").subscribe({
      next: (response: any) => {
        this.tvShows = response.result;
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }
}