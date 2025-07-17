// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, RouterOutlet } from '@angular/router'; // ¡Elimina estas importaciones!

// Vuelve a importar todos tus componentes
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Nosotros } from './nosotros/nosotros';
import { Servicios } from './servicios/servicios';
import { Industria } from './industria/industria';
import { Portafolio } from "./portafolio/portafolio";
import { Contacto } from './contacto/contacto';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    // Agrega de nuevo todos tus componentes aquí
    Home, Navbar, Nosotros, Servicios, Industria, Portafolio, Contacto, Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Empresa de Servicios de Desarrollo de Software';
}