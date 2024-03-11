import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl;
  id = '65e9fec9f3565afdbf22496d';
  responseData$: Observable<any> | undefined;
  constructor(private http: HttpClient) {}
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
