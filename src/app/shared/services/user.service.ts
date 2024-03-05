import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  name: string = 'Jacob';
  contacts: any[] = [
    {
      name: 'Jacob',
    },
    {
      name: 'Kate',
    },
  ];
  getName() {
    return this.name;
  }
  getContacts() {
    return this.contacts;
  }
}
