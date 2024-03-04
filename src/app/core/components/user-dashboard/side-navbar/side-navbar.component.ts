import { Component } from '@angular/core';
import { SideNavbarItemComponent } from '../side-navbar-item/side-navbar-item.component';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [SideNavbarItemComponent],
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
      link: 'main',
    },
    {
      title: 'History',
      icon: 'tablerHistory',
      link: 'main',
    },
  ];
}
