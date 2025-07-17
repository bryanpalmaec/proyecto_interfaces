// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router'; // ¡Elimina esta importación!
import { App } from './app/app';
// import { routes } from './app/app.routes'; // ¡Elimina esta importación!

bootstrapApplication(App, {
  providers: [
    // ¡Elimina provideRouter(routes) de aquí!
  ]
}).catch(err => console.error(err));