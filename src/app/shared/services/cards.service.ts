import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor() {}

  cards: any[] = [
    {
      color: 'bg-gradient-to-r from-cyan-200 to-blue-200',
      balance: 720,
      last_digits: '4334',
      exp_date: '03/27',
    },
    {
      color: 'bg-gradient-to-r from-green-200  to-teal-200',
      balance: 440,
      last_digits: '0681',
      exp_date: '12/24',
    },
  ];

  getCards() {
    return this.cards;
  }
}
