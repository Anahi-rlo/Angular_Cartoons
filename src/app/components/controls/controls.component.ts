import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

  constructor(private TvShowsService : TvShowsService){
  }
  public searchTerm : string =""; 

  public onClickSetAll ( ):void{
    this.TvShowsService.setAllAs(true);
  };

  public onClickUnsetAll ():void{
    console.log("Click en deseleccionar todos");
    this.TvShowsService.setAllAs(false);
  };

  public onClickChangeOrder():void{
    this.TvShowsService.onClickChangeOrder();
  }

  //hace la accion de busqueda
  public onClickSearch(): void{
    this.TvShowsService.searchByTerm(this.searchTerm);
  }

}
