import { Component } from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { CardsService } from '../../../../shared/services/cards.service';

@Component({
  selector: 'app-credits-card-container',
  standalone: true,
  imports: [CreditCardComponent],
  templateUrl: './credits-card-container.component.html',
  styleUrl: './credits-card-container.component.css',
})
export class CreditsCardContainerComponent {
  cards: any[] = [];
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cards = this.cardsService.getCards();
  }
}
