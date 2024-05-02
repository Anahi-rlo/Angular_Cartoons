import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  public contador: number = 1000;

  constructor() { }

  public incrementa(): void {
    this.contador++;
  }

  public decrementa(): void {
    this.contador--;
  }
}