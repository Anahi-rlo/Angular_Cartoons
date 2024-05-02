import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})

export class ContactPage {
  //inyeccion en anguar para usar servicios
  //le ponemos que serviciosqueremos que use y ya tendremos acceso a lo q este servicio tenga
  constructor(private TvShowsService: TvShowsService) {
  }

  //obtengo el contador del servicio
  get contador(): number {
    return this.TvShowsService.contador;
  }

  public onClick() {
    this.TvShowsService.incrementa();
  }
}