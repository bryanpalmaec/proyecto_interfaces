import { Routes } from '@angular/router';
import { Home } from './home/home'; // Asegúrate de que los nombres de las clases de componentes terminen en 'Component' y que los archivos también
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
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no encontrada a la ruta por defecto (Home)
];