import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  imports: [],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {
  titulo = 'Proyectos de Impacto Global';
  descripcion = `Este proyecto representa un esfuerzo colaborativo para transformar digitalmente el ecosistema de salud pública en América Latina. Desarrollamos una plataforma escalable con inteligencia artificial que automatiza procesos clínicos, mejora la accesibilidad a tratamientos y centraliza datos de pacientes con estándares internacionales.`;

  videoUrl = 'https://cdn.pixabay.com/video/2022/10/24/136259-764387660_large.mp4';
}
