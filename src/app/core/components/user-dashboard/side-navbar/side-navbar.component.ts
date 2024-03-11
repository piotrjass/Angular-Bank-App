import { Component, HostListener } from '@angular/core';
import { SideNavbarItemComponent } from '../side-navbar-item/side-navbar-item.component';
import { RouterModule } from '@angular/router';
import { tablerIcons } from '@ng-icons/tabler-icons';
import { tablerMenu2 } from '@ng-icons/tabler-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  logout() {
    this.router.navigate(['/']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (window.innerWidth > 1024) {
      this.showOptions = true;
    }
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
