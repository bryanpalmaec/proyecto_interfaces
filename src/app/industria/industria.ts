import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-industria',
  imports: [CommonModule],
  templateUrl: './industria.html',
  styleUrl: './industria.css'
})
export class Industria implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  industrias = [
    {
      titulo: 'Finanzas',
      descripcion: 'Innovamos en banca digital, pagos y soluciones blockchain.',
      imagen: '/assets/financias.jpg'
    },
    {
      titulo: 'Entretenimiento',
      descripcion: 'Creamos experiencias inmersivas para plataformas digitales.',
      imagen: '/assets/entretenimiento.jpg'
    },
    {
      titulo: 'Salud',
      descripcion: 'Transformamos la salud con software seguro y escalable.',
      imagen: '/assets/salud.jpg'
    },
    {
      titulo: 'Comercio',
      descripcion: 'Soluciones inteligentes para comercio físico y digital.',
      imagen: '/assets/compras.jpg'
    }
  ];

  logos = [
    'assets/logo1.png',
    'assets/logo2.png',
    'assets/logo3.png',
    'assets/logo4.png',
    'assets/logo5.png',
    'assets/logo6.png',
    'assets/logo7.png'
  ];

   ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const marquee = document.querySelector('.logo-marquee') as HTMLElement;

      if (marquee) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            marquee.classList.add('play');
          } else {
            marquee.classList.remove('play');
          }
        });
        observer.observe(marquee);
      }
    }
  }
}
