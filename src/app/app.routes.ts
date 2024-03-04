import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/layouts/landing-page/landing-page.component';
import { LoginComponent } from './shared/layouts/login/login.component';
import { LoginFormComponent } from './core/components/login/login-form/login-form.component';
import { SignupFormComponent } from './core/components/login/signup-form/signup-form.component';
import { UserDashboardComponent } from './shared/layouts/user-dashboard/user-dashboard.component';

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
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    title: 'user-dashboard',
  },
];
