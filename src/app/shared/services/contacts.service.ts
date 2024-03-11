import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  url = environment.apiUrl;
  id = '65e9fec9f3565afdbf22496d';
  constructor(private http: HttpClient) {}
  responseData$: Observable<any> | undefined;
  async getContactsFromServer() {
    try {
      this.responseData$ = this.http.get(`${this.url}/contact/${this.id}`);
    } catch (error) {
      console.error(error);
    }
  }
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
