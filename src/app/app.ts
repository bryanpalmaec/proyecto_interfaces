import {Component} from '@angular/core';
import {Home} from './home/home';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Nosotros } from './nosotros/nosotros';
import { Servicios } from './servicios/servicios';
import { Industria } from './industria/industria';
import { Portafolio } from "./portafolio/portafolio";
import { Contacto } from './contacto/contacto';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Home, Navbar, Nosotros, Servicios, Industria, Portafolio,Contacto,Footer,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // Propiedades del componente
  title = 'Empresa de Servicios de Desarrollo de Software';

}