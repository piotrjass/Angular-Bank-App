import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../core/components/landing-page/top-navbar/top-navbar.component';
import { HeroSectionComponent } from '../../../core/components/landing-page/hero-section/hero-section.component';
import { FooterComponent } from '../../../core/components/landing-page/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavbarComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
