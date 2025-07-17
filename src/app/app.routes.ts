import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { Nosotros } from './nosotros/nosotros';
import { Servicios } from './servicios/servicios';
import { Industria } from './industria/industria';
import { Portafolio } from './portafolio/portafolio';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'nosotros', component: Nosotros },
  { path: 'servicios', component: Servicios },
  { path: 'industria', component: Industria },
  { path: 'portafolio', component: Portafolio },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' } 
];