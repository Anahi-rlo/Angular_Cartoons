import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
  @Output()
  public setAllAs : EventEmitter<boolean> = new EventEmitter();

  @Output()
  public invertAll : EventEmitter<void> = new EventEmitter();
  
  //manda el string de busqueda
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public searchTerm : string =""; 

  public onClickSetAll ( ):void{
    console.log("Click en seleccionar todos");
    this.setAllAs.emit(true);
  };

  public onClickUnsetAll ():void{
    console.log("Click en deseleccionar todos");
    this.setAllAs.emit(false);
  };

  public onClickChangeOrder():void{
    this.invertAll.emit();
  }

  //hace la accion de busqueda
  public onClickSearch(): void{
    this.onSearch.emit(this.searchTerm);
  }

}
