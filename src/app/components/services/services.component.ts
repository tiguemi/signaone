import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Enseignes lumineuses',
      description: 'Enseignes LED sur mesure pour maximiser votre visibilité jour et nuit',
      icon: '💡'
    },
    {
      title: 'Signalétique intérieure',
      description: 'Solutions de signalétique pour guider et informer vos visiteurs',
      icon: '🏢'
    },
    {
      title: 'Habillage de façade',
      description: 'Transformez votre façade en véritable support de communication',
      icon: '🎨'
    },
    {
      title: 'Marquage véhicule',
      description: 'Transformez vos véhicules en supports publicitaires mobiles',
      icon: '🚗'
    },
    {
      title: 'Panneaux publicitaires',
      description: 'Création de panneaux impactants pour votre communication extérieure',
      icon: '📋'
    },
    {
      title: 'Lettrage découpé',
      description: 'Lettres et logos découpés pour un rendu professionnel et élégant',
      icon: '✂️'
    }
  ];
}
