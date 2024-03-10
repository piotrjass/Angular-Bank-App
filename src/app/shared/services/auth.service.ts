import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';
axios.defaults.withCredentials = true;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}
  url = 'http://localhost:8000/api/v1/login';
  token: string = '';

  async login(formObject: any) {
    try {
      const res = await axios.post(`${this.url}`, formObject, {
        withCredentials: true,
      });
      console.log('http cookie set!');
    } catch (error) {
      console.error(error);
    }
  }

  async verifyToken() {
    try {
      const res = await axios.post(`${this.url}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
