import { Component } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  name: string = '';
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.name = this.userService.getName();
  }
}
