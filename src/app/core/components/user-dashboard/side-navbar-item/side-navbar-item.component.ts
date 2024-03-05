import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerIcons } from '@ng-icons/tabler-icons';
import { RouterModule } from '@angular/router';
import {
  tablerBrandGithub,
  tablerLayoutDashboard,
  tablerWallet,
  tablerHistory,
  tablerLogout2,
} from '@ng-icons/tabler-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-navbar-item',
  standalone: true,
  imports: [NgIconComponent, RouterLink, RouterModule],
  templateUrl: './side-navbar-item.component.html',
  styleUrl: './side-navbar-item.component.css',
  viewProviders: [
    provideIcons({
      tablerBrandGithub,
      tablerLayoutDashboard,
      tablerWallet,
      tablerHistory,
      tablerLogout2,
    }),
  ],
})
export class SideNavbarItemComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
}
