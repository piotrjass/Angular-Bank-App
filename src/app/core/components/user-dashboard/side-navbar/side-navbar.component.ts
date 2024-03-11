import { Component } from '@angular/core';
import { SideNavbarItemComponent } from '../side-navbar-item/side-navbar-item.component';
import { RouterModule } from '@angular/router';
import { tablerIcons } from '@ng-icons/tabler-icons';
import { tablerMenu2 } from '@ng-icons/tabler-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [SideNavbarItemComponent, RouterModule, NgIconComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
  viewProviders: [
    provideIcons({
      tablerMenu2,
    }),
  ],
})
export class SideNavbarComponent {
  showOptions: boolean = true;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
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
