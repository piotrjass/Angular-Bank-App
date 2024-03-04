import { Component } from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';

@Component({
  selector: 'app-credits-card-container',
  standalone: true,
  imports: [CreditCardComponent],
  templateUrl: './credits-card-container.component.html',
  styleUrl: './credits-card-container.component.css',
})
export class CreditsCardContainerComponent {}
