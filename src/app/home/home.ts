import { Component } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Variable para el efecto del botón
  isButtonActive: boolean = false;

  // Función para el hover del botón
  toggleButton() {
    this.isButtonActive = !this.isButtonActive;
  }

  // Lista de elementos dinámicos
  items = ['Angular 20', 'TypeScript', 'VS Code', 'HTML5'];
}
