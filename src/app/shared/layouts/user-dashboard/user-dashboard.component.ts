import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavbarComponent } from '../../../core/components/user-dashboard/side-navbar/side-navbar.component';
import { TopNavbarComponent } from '../../../core/components/user-dashboard/top-navbar/top-navbar.component';
import { MainDashboardComponent } from '../../../core/components/user-dashboard/main-dashboard/main-dashboard.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    SideNavbarComponent,
    TopNavbarComponent,
    MainDashboardComponent,
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {}
