import { Component } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {}
