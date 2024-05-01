import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [NgFor, NgIf, ShowComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {
  //Cadena de objetos
  //recibir parametros a trabes del componente padre, para eso usamos decorador
  //este atributo nos va a llegar como propiedad
  //Se va a alimentar del complemento padre
  @Input()
  public tvShows: Show[] = []

  @Output()
  public deleteSure : EventEmitter<number> = new EventEmitter();

  // public informDelete(show: Show ):void{
  //   this.tvShows = this.tvShows.filter(s => s !== show);
  // }

  public informDelete(show: Show): void {
    const index = this.tvShows.indexOf(show);
    if (index !== -1) {
      this.deleteSure.emit(index);
      // this.tvShows.splice(index, 1);
    }
  }
}
