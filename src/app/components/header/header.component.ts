import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  activeSection = 'accueil';
  isHome = true;

  private sections = ['accueil', 'enseigne', 'signaletique', 'realisations', 'devis', 'contact'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.isHome = this.router.url === '/';
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.isHome = e.urlAfterRedirects === '/';
      this.closeMenu();
    });
    this.updateActiveSection();
  }

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

  goHome() {
    this.router.navigate(['/']);
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
