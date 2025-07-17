import { CommonModule } from '@angular/common';
import { Component,AfterViewInit,ElementRef,ViewChildren,QueryList} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios implements AfterViewInit{
  services = [
    { icon: '🛠️', title: 'Desarrollo Personalizado' },
    { icon: '🛒', title: 'Comercial Digital' },
    { icon: '🔁', title: 'Implementación de Salesforce'},
    { icon: '📊', title: 'Implementación deNetSuite' },
    { icon: '🤖', title: 'IA Generativa' },
    { icon: '💻', title: 'Ingenería de Software' },
    { icon: '☁️', title: 'Ingenería en la Nube' },
    { icon: '📈', title: 'Ingeniería de Datos' },
    { icon: '📱', title: 'Desarrollo de Apps Nativas' },
    { icon: '💬', title: 'Consultoria de productos' },
    { icon: '🔗', title: 'Integración de sistemas' }
  ];

  metrics = [
    {
      number: '70',
      suffix: '+',
      label: 'Clientes satisfechos',
      desc: 'Priorizamos a nuestros clientes \' cultivando relaciones sólidas y de confianza.'
    },
    {
      number: '250',
      suffix: '+',
      label: 'Proyectos finalizados',
      desc: 'Satisfacción en cada entrega, con un enfoque en la calidad y la innovación.'
    },
    {
      number: '175',
      suffix: '+',
      label: 'Profesionales',
      desc: 'Un equipo diverso y talentoso, comprometido con la excelencia en cada proyecto.'
    },
    {
      number: '5',
      suffix: '+',
      label: 'Sucursales globales',
      desc: 'Presencia internacional con un enfoque local, brindando soluciones adaptadas a cada mercado.'
    }
  ];
  @ViewChildren('metricNumber', { read: ElementRef })
  metricElements!: QueryList<ElementRef>;

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = +el.dataset['target']!;
          const suffix = el.dataset['suffix'] || '';
          this.animateCount(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.6
    });

    this.metricElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }
}

  animateCount(element: HTMLElement, target: number, suffix: string) {
    let count = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 30));

    const counter = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(counter);
      }
      element.textContent = count + suffix;
    }, 30);
  }
}
