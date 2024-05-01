import { Component,EventEmitter, Output } from '@angular/core';
import { Show } from '../interfaces/show.interface';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
  //propagar info de un componente padre a hijo
  @Output()
  // public setAllAs: Show[] = []
  // si no quieres mandar un atributo
  //public setAllAs : EventEmitter<void> = new EventEmitter();

//mandas un atributo 
  public setAllAs : EventEmitter<boolean> = new EventEmitter();

  //para
  @Output()
  public invertAll : EventEmitter<void> = new EventEmitter();
  
  public onClickSetAll ( ):void{
    console.log("Click en seleccionar todos");
    //emito lo q esta en la funcion, propaga el evento y con el setAllAs lo conecta
    //evento q llamo/ nombro en el componente
    //accion del padre
    //sin mandar atributo 
    //this.setAllAs.emit();
    this.setAllAs.emit(true);
  };

  public onClickUnsetAll ():void{
    console.log("Click en deseleccionar todos");
    this.setAllAs.emit(false);
  };

  public onClickChangeOrder():void{
    this.invertAll.emit();
  }

}
