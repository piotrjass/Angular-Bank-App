import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}
  contacts: any[] = [
    {
      name: 'Max',
      email: 'max@gmail.com',
      cards: 2,
    },
    {
      name: 'Kate',
      email: 'Kate@gmail.com',
      cards: 1,
    },
    {
      name: 'Eve',
      email: 'Eve@gmail.com',
      cards: 4,
    },
    {
      name: 'Adam',
      email: 'Adam@gmail.com',
      cards: 3,
    },
  ];
  getContacts() {
    return this.contacts;
  }
}
