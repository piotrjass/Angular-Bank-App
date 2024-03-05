import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  history: any[] = [
    {
      person: 'Max',
      date: '22 Jan 2022',
      amount: '200',
      type: 'Income',
    },
    {
      person: 'Kate',
      date: '24 Aug 2021',
      amount: '150',
      type: 'Expense',
    },
    {
      person: 'Julie',
      date: '10 Mar 2011',
      amount: '90',
      type: 'Income',
    },
    {
      person: 'Adam',
      date: '03 Apr 2017',
      amount: '240',
      type: 'Expense',
    },
  ];
  constructor() {}
  getHistory() {
    return this.history;
  }
}
