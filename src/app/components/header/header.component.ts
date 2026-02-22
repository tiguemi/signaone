import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  activeSection = 'accueil';

  private sections = ['accueil', 'enseigne', 'signaletique', 'devis', 'contact'];

  ngOnInit() {
    this.updateActiveSection();
  }

  ngOnDestroy() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  navigateTo(section: string) {
    this.activeSection = section;
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const scrollY = window.scrollY + 120;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.sections[i]);
      if (el && el.offsetTop <= scrollY) {
        this.activeSection = this.sections[i];
        return;
      }
    }

    this.activeSection = 'accueil';
  }
}
