import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}
  login() {
    this.authService.login();
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
// export class CreditsCardContainerComponent {
//   cards: any[] = [];
//   constructor(private cardsService: CardsService) {}

//   ngOnInit(): void {
//     this.cards = this.cardsService.getCards();
//   }

//   test() {
//     this.cardsService.getCardsFromServer();
//   }
// }
