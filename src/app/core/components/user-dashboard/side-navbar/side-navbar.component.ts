import { Component } from '@angular/core';
import { SideNavbarItemComponent } from '../side-navbar-item/side-navbar-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [SideNavbarItemComponent, RouterModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent {
  items: any[] = [
    {
      title: 'Main',
      icon: 'tablerLayoutDashboard',
      link: 'main',
    },
    {
      title: 'Operations',
      icon: 'tablerWallet',
      link: 'operations',
    },
    {
      title: 'History',
      icon: 'tablerHistory',
      link: 'history',
    },
    {
      title: 'Contacts',
      icon: 'tablerAddressBook',
      link: 'contacts',
    },
  ];
}
