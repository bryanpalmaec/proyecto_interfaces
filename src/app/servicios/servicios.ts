import { CommonModule } from '@angular/common';
import { Component,AfterViewInit,ElementRef,ViewChildren,QueryList} from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios{
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
      number: '70+',
      label: 'Clientes satisfechos',
      desc: 'Priorizamos a nuestros clientes \' cultivando relaciones sólidas y de confianza.'
    },
    {
      number: '250+',
      label: 'Proyectos finalizados',
      desc: 'Satisfacción en cada entrega, con un enfoque en la calidad y la innovación.'
    },
    {
      number: '175+',
      label: 'Profesionales',
      desc: 'Un equipo diverso y talentoso, comprometido con la excelencia en cada proyecto.'
    },
    {
      number: '5+',
      label: 'Sucursales globales',
      desc: 'Presencia internacional con un enfoque local, brindando soluciones adaptadas a cada mercado.'
    }
  ];
  
}
