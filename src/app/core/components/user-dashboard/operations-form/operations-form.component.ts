import { Component } from '@angular/core';
import { CardsService } from '../../../../shared/services/cards.service';

@Component({
  selector: 'app-operations-form',
  standalone: true,
  imports: [],
  templateUrl: './operations-form.component.html',
  styleUrl: './operations-form.component.css',
})
export class OperationsFormComponent {
  cards: any[] = [];
  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.getCards();
  }
}
