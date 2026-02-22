import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Realisation {
  titre: string;
  categorie: 'Façade' | 'Lumineuse' | 'Totem' | 'Vitrine';
  lieu: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly realisationsData = signal<Realisation[]>([
    {
      titre: 'Enseigne LED Pharmacie du Parc',
      categorie: 'Lumineuse',
      lieu: 'Lyon',
      description: 'Conception d\'une enseigne double-face avec éclairage LED basse consommation.'
    },
    {
      titre: 'Totem directionnel Quartier d\'affaires Nova',
      categorie: 'Totem',
      lieu: 'Bordeaux',
      description: 'Fabrication et pose d\'un totem aluminium pour la signalétique extérieure.'
    },
    {
      titre: 'Habillage vitrine Concept Store Épure',
      categorie: 'Vitrine',
      lieu: 'Nantes',
      description: 'Découpe adhésive premium et charte visuelle appliquée sur 24 mètres linéaires.'
    },
    {
      titre: 'Façade rétro-éclairée Boulangerie Maison Lenoir',
      categorie: 'Façade',
      lieu: 'Toulouse',
      description: 'Lettrage relief avec rétro-éclairage pour une visibilité de jour comme de nuit.'
    }
  ]);

  readonly categories = signal<Array<Realisation['categorie'] | 'Toutes'>>(['Toutes', 'Façade', 'Lumineuse', 'Totem', 'Vitrine']);
  readonly selectedCategory = signal<Realisation['categorie'] | 'Toutes'>('Toutes');
  readonly isSubmitted = signal(false);

  readonly filteredRealisations = computed(() => {
    if (this.selectedCategory() === 'Toutes') {
      return this.realisationsData();
    }

    return this.realisationsData().filter((item) => item.categorie === this.selectedCategory());
  });

  readonly quoteForm = this.fb.nonNullable.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    entreprise: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', [Validators.required, Validators.pattern(/^[0-9+\s.-]{8,}$/)]],
    besoin: ['', [Validators.required, Validators.minLength(20)]]
  });

  constructor(private readonly fb: FormBuilder) {}

  selectCategory(category: Realisation['categorie'] | 'Toutes'): void {
    this.selectedCategory.set(category);
  }

  submitQuote(): void {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      this.isSubmitted.set(false);
      return;
    }

    this.isSubmitted.set(true);
    this.quoteForm.reset();
  }
}
