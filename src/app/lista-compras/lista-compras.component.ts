import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itemlista } from './item-lista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item: string = '';
  lista: Itemlista[] = [];

  addItem(){
    let itemlista = new Itemlista();
    itemlista.name = this.item;
    itemlista.id = this.lista.length + 1;
    this.lista.push(itemlista);
    
    this.item = '';
  }
}
