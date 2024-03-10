import { Component } from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { CreditsCardContainerComponent } from '../credits-card-container/credits-card-container.component';
import { CardsService } from '../../../../shared/services/cards.service';
import { LastOperationComponent } from '../last-operation/last-operation.component';
@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CreditsCardContainerComponent, LastOperationComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {
  balance: number = 0;
  constructor(private cardsService: CardsService) {
    this.calculateTotalBalance();
  }
  calculateTotalBalance() {
    const cards = this.cardsService.getCards();
    for (const card of cards) {
      this.balance += card.balance;
    }
  }
}
