import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';

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

  @Output()
  public informDelete : EventEmitter<Show> = new EventEmitter();

  //es una instancia de cada componente, no lo controla solo
  //public selected : boolean = false;
//no lo usamos porq ahora esta en el modelo 
  public onSelect():void{
    this.show.isSelected=!this.show.isSelected;
  }

  public deleteShow():void{
    this.informDelete.emit(this.show);
  }
}
