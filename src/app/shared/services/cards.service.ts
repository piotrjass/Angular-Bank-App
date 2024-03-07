import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor() {}
  url = 'http://localhost:8000/api/v1/card';
  id = '65e9fec9f3565afdbf22496d';
  async getCardsFromServer() {
    console.log('starts');
    try {
      const res = await axios.get(`${this.url}/${this.id}`);
      console.log(res.status);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    console.log('stop');
  }

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
