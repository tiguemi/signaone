import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CHANTIERS, Chantier } from '../../components/portfolio/portfolio-data';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent {
  chantiers: Chantier[] = CHANTIERS;

  constructor(private router: Router) {}

  openChantier(slug: string) {
    this.router.navigate(['/realisations', slug]);
  }
}
