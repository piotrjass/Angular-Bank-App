import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/layouts/landing-page/landing-page.component';
import { LoginComponent } from './shared/layouts/login/login.component';
import { LoginFormComponent } from './core/components/login/login-form/login-form.component';
import { SignupFormComponent } from './core/components/login/signup-form/signup-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
    children: [
      {
        path: 'login-form',
        component: LoginFormComponent,
      },
      {
        path: 'signup-form',
        component: SignupFormComponent,
      },
    ],
  },
];
