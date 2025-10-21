import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { EstadoService } from './estado.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './app.component.html'
})
export class AppComponent {
  newName = '';

  // Referencia al input de añadir
  @ViewChild('addInput') addInputRef!: ElementRef<HTMLInputElement>;

  constructor(public state: EstadoService) {}

  addNew() {
    const name = this.newName.trim();
    if (!name) return; // no añadir si está vacío

    this.state.add(name);  // añade el elemento con el nombre introducido
    this.newName = '';     // limpia el input

    // da focus al input
    setTimeout(() => {
      this.addInputRef.nativeElement.focus();
    });
  }
}


