import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  @Input()
  public show:Show={
    episodes:0,
    id:0,
    image:"",
    title:'',
    year:0
  };

  constructor(private TvShowsService : TvShowsService){
  }

  public onSelect():void{
    this.show.isSelected=!this.show.isSelected;
  }

  public deleteShow():void{
    this.TvShowsService.delete(this.show.id);
  }
}
