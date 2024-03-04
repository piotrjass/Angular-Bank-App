import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {}
