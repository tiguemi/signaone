import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { QuoteComponent } from '../../components/quote/quote.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SignaletiqueComponent } from '../../components/signaletique/signaletique.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    SignaletiqueComponent,
    PortfolioComponent,
    QuoteComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-signaletique></app-signaletique>
    <app-portfolio></app-portfolio>
    <app-quote></app-quote>
    <app-contact></app-contact>
  `
})
export class HomeComponent {}
