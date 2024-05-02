import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from '../../components/contador/contador.component';
import { ImagenComponent } from '../../components/imagen/imagen.component';
import { ShowsListComponent } from '../../components/shows-list/shows-list.component';
import { Show } from '../../interfaces/show.interface';
import { ShowComponent } from '../../components/show/show.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { TvShowsService } from '../../services/tv-shows.service';



@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, ImagenComponent, ShowsListComponent, ShowComponent, ControlsComponent],
  templateUrl: './tv-shows.page.html',
  styleUrl: './tv-shows.page.css'
})
export class TvShowsPage {
  public titulo: string = "mi nueva aplicación de Angular";

  //hago inyector
  constructor(private TvShowsService : TvShowsService){
  }

  //obtengo array tvShows
  get tvShows(): Show[]{
    return this.TvShowsService.tvShows;
  }

  //obtengo array tvShows2
  get tvShows2(): Show[]{
    return this.TvShowsService.tvShows2;
  }

  public setAllAs(value :boolean): void {
    this.tvShows.forEach(item => item.isSelected = value);
    console.log('Accion desde el app component');
  }

  public invertAll(): void {
    console.log("Se invierten tarjetas en app component");
    this.tvShows.reverse();
  }

  public deleteSure (value : number):void{
    this.TvShowsService.delete(value);
  }

  //recibe cadena, hace busqueda
  public searchByTerm(value : string): void{
    this.TvShowsService.searchByTerm(value);
  }
}