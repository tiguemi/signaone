import { Component, OnInit, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CHANTIERS, Chantier } from '../../components/portfolio/portfolio-data';

@Component({
  selector: 'app-chantier-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chantier-detail.component.html',
  styleUrls: ['./chantier-detail.component.scss']
})
export class ChantierDetailComponent implements OnInit {
  chantier = signal<Chantier | null>(null);
  lightboxIndex = signal<number | null>(null);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = CHANTIERS.find(c => c.slug === slug) ?? null;
    this.chantier.set(found);
  }

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxIndex.set(null);
    document.body.style.overflow = '';
  }

  prevPhoto() {
    const c = this.chantier();
    const idx = this.lightboxIndex();
    if (c && idx !== null) {
      this.lightboxIndex.set((idx - 1 + c.photos.length) % c.photos.length);
    }
  }

  nextPhoto() {
    const c = this.chantier();
    const idx = this.lightboxIndex();
    if (c && idx !== null) {
      this.lightboxIndex.set((idx + 1) % c.photos.length);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.lightboxIndex() === null) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevPhoto();
    if (event.key === 'ArrowRight') this.nextPhoto();
  }

  goBack() {
    this.router.navigate(['/realisations']);
  }
}
