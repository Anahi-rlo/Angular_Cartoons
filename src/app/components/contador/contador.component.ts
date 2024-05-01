import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //tipo   nombe: tipo de dato
  public contador: number = 0;
  public showButton: boolean= true;
  public nombres: string[]= ['Juan', 'Roberto','Carlos', 'Maria', 'Carla'];
  // para llamarlo en .html {{contador}}

  //reciba la cantidad en el caso de que no mande nada el valor es 1
  //Si siempre vamos a mandar = 1
  public incrementa(cantidad: number = 1): void {
    this.contador += cantidad;
  }

  public decrementa(cantidad: number = 1): void {
    this.contador -= cantidad;
  }

}
