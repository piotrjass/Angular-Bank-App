import { Injectable, signal } from '@angular/core';
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
  isAuthenticated = signal(false);
  count = signal(1);
  isAuth: boolean = false;
  changeIsAuth() {
    this.isAuth != this.isAuth;
  }
  changeIsAAuthenticated() {
    this.isAuthenticated.set(false);
    console.log(this.isAuthenticated);
  }
  getIsAAuthenticated() {
    return this.isAuthenticated();
  }

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
