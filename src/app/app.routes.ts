import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/layouts/landing-page/landing-page.component';
import { LoginComponent } from './shared/layouts/login/login.component';
import { LoginFormComponent } from './core/components/login/login-form/login-form.component';
import { SignupFormComponent } from './core/components/login/signup-form/signup-form.component';
import { UserDashboardComponent } from './shared/layouts/user-dashboard/user-dashboard.component';
import { MainDashboardComponent } from './core/components/user-dashboard/main-dashboard/main-dashboard.component';
import { OperationsComponent } from './core/components/user-dashboard/operations/operations.component';
import { HistoryComponent } from './core/components/user-dashboard/history/history.component';
import { loginAuthGuard } from './core/guards/login-auth.guard';
import { ContactsComponent } from './core/components/user-dashboard/contacts/contacts.component';

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
    // canActivate: [loginAuthGuard],
    children: [
      {
        path: 'main',
        component: MainDashboardComponent,
        title: 'main',
      },
      {
        path: 'operations',
        component: OperationsComponent,
        title: 'operations',
      },
      {
        path: 'history',
        component: HistoryComponent,
        title: 'history',
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        title: 'contacts',
      },
    ],
  },
];
