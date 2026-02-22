import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SignaletiqueItem {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

@Component({
  selector: 'app-signaletique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signaletique.component.html',
  styleUrls: ['./signaletique.component.scss']
})
export class SignaletiqueComponent {
  items: SignaletiqueItem[] = [
    {
      title: 'Signalétique intérieure',
      description: 'Guidez et informez vos clients à l\'intérieur de vos espaces avec des solutions adaptées.',
      icon: '🏢',
      details: ['Plans d\'évacuation', 'Panneaux directionnels', 'Plaques de portes', 'Signalétique PMR']
    },
    {
      title: 'Signalétique extérieure',
      description: 'Rendez votre établissement visible et identifiable depuis la rue avec des supports durables.',
      icon: '🏙️',
      details: ['Totems et pylônes', 'Panneaux de façade', 'Drapeaux et oriflammes', 'Enseignes murales']
    },
    {
      title: 'Signalétique événementielle',
      description: 'Communiquez efficacement lors de vos salons, conférences et événements d\'entreprise.',
      icon: '🎪',
      details: ['Roll-up et kakémonos', 'Stands d\'exposition', 'Banderoles', 'Affichage temporaire']
    },
    {
      title: 'Signalétique de sécurité',
      description: 'Assurez la conformité réglementaire et la sécurité de vos locaux avec des panneaux certifiés.',
      icon: '⚠️',
      details: ['Issues de secours', 'Consignes de sécurité', 'Extincteurs et RIA', 'Marquage au sol']
    }
  ];
}
