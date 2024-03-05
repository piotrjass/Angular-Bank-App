import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  name: string = 'Jacob';
  contacts: string[] = [];
  getName() {
    return this.name;
  }
  getContacts() {
    return this.contacts;
  }
}
