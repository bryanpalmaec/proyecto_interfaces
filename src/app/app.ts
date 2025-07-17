import {Component} from '@angular/core';
import {Home} from './home/home';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Nosotros } from './nosotros/nosotros';
import { Servicios } from './servicios/servicios';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Home,Navbar,Nosotros,Servicios],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // Propiedades del componente
  title = 'Mi App Angular 20';
  currentYear = new Date().getFullYear();

  // Métodos/funciones
  greetUser() {
    return `¡Hoy es ${new Date().toLocaleDateString()}!`;
  }
}