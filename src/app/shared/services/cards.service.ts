import { Injectable } from '@angular/core';
import axios from 'axios';
//
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//
@Injectable({
  providedIn: 'root',
})
export class CardsService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}
  id = '65e9fec9f3565afdbf22496d';
  responseData$: Observable<any> | undefined;
  async getCardsFromServer() {
    try {
      this.responseData$ = this.http.get(this.url);
    } catch (error) {
      console.error(error);
    }
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
