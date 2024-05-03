import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from '../../components/contador/contador.component';
import { ImagenComponent } from '../../components/imagen/imagen.component';
import { ShowsListComponent } from '../../components/shows-list/shows-list.component';
import { Show } from '../../interfaces/show.interface';
import { ShowComponent } from '../../components/show/show.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { TvShowsService } from '../../services/tv-shows.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, ImagenComponent, ShowsListComponent, ShowComponent, ControlsComponent, ModalComponent],
  templateUrl: './tv-shows.page.html',
  styleUrl: './tv-shows.page.css'
})
export class TvShowsPage {
  public titulo: string = "mi nueva aplicación de Angular";

  //hago inyector
  constructor(private TvShowsService: TvShowsService) {
    this.TvShowsService.fetchTvShows();
  }

  //obtengo array tvShows
  get tvShows(): Show[] {
    return this.TvShowsService.tvShows;
  }

  //obtengo array tvShows2
  get tvShows2(): Show[] {
    return this.TvShowsService.tvShows2;
  }

}
