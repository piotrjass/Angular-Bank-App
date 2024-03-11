import { Injectable, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
axios.defaults.withCredentials = true;
//
import { environment } from '../../../environments/environment.development';

//
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  url = environment.apiUrl;

  token: string = '';
  isAuthenticated = signal(false);
  count = signal(1);
  isAuth: boolean = false;
  changeIsAuth() {
    this.isAuth != this.isAuth;
  }
  changeIsAAuthenticated() {
    this.isAuthenticated.set(false);
  }
  getIsAAuthenticated() {
    return this.isAuthenticated();
  }

  async login(formObject: any) {
    try {
      const res = await axios.post(`${this.url}`, formObject, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  }

  verifyToken = async () => {
    try {
      const res = await axios.get(`${this.url}`, {
        withCredentials: true,
      });
      if (res.status !== 200) return;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
