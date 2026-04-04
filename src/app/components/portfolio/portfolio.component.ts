import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedCategory = signal<string>('all');

  categories = [
    { id: 'all', name: 'Toutes nos réalisations', icon: '🎯' },
    { id: 'enseigne', name: 'Enseignes', icon: '💡' },
    { id: 'signaletique', name: 'Signalétique', icon: '🏢' },
    { id: 'facade', name: 'Habillage façade', icon: '🎨' },
    { id: 'vehicule', name: 'Marquage véhicule', icon: '🚗' },
    { id: 'panneau', name: 'Panneaux', icon: '📋' }
  ];

  portfolioItems: PortfolioItem[] = [
    // Enseignes lumineuses
    {
      id: '1',
      title: 'Enseigne lumineuse restaurant',
      category: 'enseigne',
      image: 'photos/IMG-20240627-WA0002.jpg',
      description: 'Enseigne LED haute qualité pour restaurant'
    },
    {
      id: '2',
      title: 'Enseigne commerciale',
      category: 'enseigne',
      image: 'photos/IMG-20240627-WA0004.jpg',
      description: 'Enseigne lumineuse pour commerce de proximité'
    },
    {
      id: '3',
      title: 'Enseigne boutique',
      category: 'enseigne',
      image: 'photos/IMG-20240627-WA0005.jpg',
      description: 'Enseigne moderne pour boutique'
    },
    {
      id: '4',
      title: 'Enseigne pharmacie',
      category: 'enseigne',
      image: 'photos/IMG-20240627-WA0006.jpg',
      description: 'Enseigne réglementaire pour pharmacie'
    },
    {
      id: '5',
      title: 'Enseigne hôtel',
      category: 'enseigne',
      image: 'photos/IMG-20240627-WA0007.jpg',
      description: 'Enseigne élégante pour établissement hôtelier'
    },
    {
      id: '6',
      title: 'Enseigne bureau',
      category: 'enseigne',
      image: 'photos/IMG-20240627-WA0008.jpg',
      description: 'Signalétique professionnelle pour bureaux'
    },

    // Signalétique
    {
      id: '7',
      title: 'Signalétique directionnelle',
      category: 'signaletique',
      image: 'photos/IMG-20240627-WA0009.jpg',
      description: 'Panneaux directionnels pour centre commercial'
    },
    {
      id: '8',
      title: 'Signalétique intérieure',
      category: 'signaletique',
      image: 'photos/IMG-20240627-WA0010.jpg',
      description: 'Signalétique moderne pour espaces intérieurs'
    },
    {
      id: '9',
      title: 'Plaques de porte',
      category: 'signaletique',
      image: 'photos/IMG-20240627-WA0011.jpg',
      description: 'Plaques professionnelles personnalisées'
    },
    {
      id: '10',
      title: 'Signalétique sécurité',
      category: 'signaletique',
      image: 'photos/IMG-20240627-WA0012.jpg',
      description: 'Panneaux de sécurité conformes aux normes'
    },

    // Habillage façade
    {
      id: '11',
      title: 'Habillage façade moderne',
      category: 'facade',
      image: 'photos/IMG-20240627-WA0013.jpg',
      description: 'Transformation complète de façade commerciale'
    },
    {
      id: '12',
      title: 'Lettrage façade',
      category: 'facade',
      image: 'photos/IMG-20240627-WA0014.jpg',
      description: 'Lettrage découpé sur façade'
    },
    {
      id: '13',
      title: 'Habillage vitrine',
      category: 'facade',
      image: 'photos/IMG-20240627-WA0015.jpg',
      description: 'Habillage complet de vitrine commerciale'
    },
    {
      id: '14',
      title: 'Façade restaurant',
      category: 'facade',
      image: 'photos/IMG-20240627-WA0016.jpg',
      description: 'Rénovation façade restaurant'
    },

    // Marquage véhicule
    {
      id: '15',
      title: 'Marquage utilitaire',
      category: 'vehicule',
      image: 'photos/IMG-20240627-WA0017.jpg',
      description: 'Marquage complet véhicule utilitaire'
    },
    {
      id: '16',
      title: 'Covering véhicule',
      category: 'vehicule',
      image: 'photos/IMG-20240627-WA0018.jpg',
      description: 'Covering total véhicule professionnel'
    },
    {
      id: '17',
      title: 'Marquage camion',
      category: 'vehicule',
      image: 'photos/IMG-20240627-WA0019.jpg',
      description: 'Marquage publicitaire poids lourd'
    },

    // Panneaux
    {
      id: '18',
      title: 'Panneau publicitaire',
      category: 'panneau',
      image: 'photos/IMG-20240627-WA0020.jpg',
      description: 'Panneau publicitaire grand format'
    },
    {
      id: '19',
      title: 'Totem publicitaire',
      category: 'panneau',
      image: 'photos/IMG-20240627-WA0021.jpg',
      description: 'Totem lumineux pour centre commercial'
    },
    {
      id: '20',
      title: 'Panneau directionnel',
      category: 'panneau',
      image: 'photos/IMG-20240627-WA0033.jpg',
      description: 'Panneau directionnel extérieur'
    },

    // Réalisations récentes
    {
      id: '21',
      title: 'Enseigne moderne 2024',
      category: 'enseigne',
      image: 'photos/IMG-20240708-WA0004.jpg',
      description: 'Enseigne LED dernière génération'
    },
    {
      id: '22',
      title: 'Projet commercial',
      category: 'facade',
      image: 'photos/IMG-20240708-WA0005.jpg',
      description: 'Habillage complet centre commercial'
    },
    {
      id: '23',
      title: 'Signalétique hôpital',
      category: 'signaletique',
      image: 'photos/IMG-20240708-WA0006.jpg',
      description: 'Signalétique médicale spécialisée'
    },
    {
      id: '24',
      title: 'Enseigne pharmacie LED',
      category: 'enseigne',
      image: 'photos/IMG-20240708-WA0007.jpg',
      description: 'Croix de pharmacie LED programmable'
    }
  ];

  filteredItems = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === category);
  });

  selectCategory(categoryId: string) {
    this.selectedCategory.set(categoryId);
  }

  trackByFn(index: number, item: PortfolioItem): string {
    return item.id;
  }
}