import { Component } from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { CreditsCardContainerComponent } from '../credits-card-container/credits-card-container.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CreditsCardContainerComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {}
