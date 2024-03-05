import { Component } from '@angular/core';
import { CardsService } from '../../../../shared/services/cards.service';
import { UserService } from '../../../../shared/services/user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-operations-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operations-form.component.html',
  styleUrl: './operations-form.component.css',
})
export class OperationsFormComponent {
  contacts: any[] = [];
  cards: any[] = [];
  constructor(
    private cardsService: CardsService,
    private userService: UserService,
  ) {
    this.cards = this.cardsService.getCards();
    this.contacts = this.userService.getContacts();
  }
  onSubmit(f: NgForm) {
    const selectedCardBalance = f.value.card; // Kwota z wybranego <option>
    const enteredAmount = f.value.amount;
    if (Number(selectedCardBalance) < enteredAmount) return;
    console.log(f.value);
    console.log(f.valid);
  }
}
