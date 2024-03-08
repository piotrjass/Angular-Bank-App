import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}
  url = 'http://localhost:8000/api/v1/login';
  token: string = '';
  cookieValue: string = '';

  async login(formObject: any) {
    try {
      const res = await axios.post(`${this.url}`, formObject);
      if (res.status !== 200) return;
      this.token = res.data.token;
      // Set the token as an HTTP-only cookie with appropriate security measures
      this.cookieService.set(
        'authToken', // Customize cookie name
        this.token,
        {
          expires: new Date(Date.now() + 3600 * 1000),
          path: '/',
          domain: window.location.hostname,
          secure: true,
          sameSite: 'Lax',
        },
      );
      console.log('http cookie set!');
    } catch (error) {
      console.error(error);
    }
  }
}
