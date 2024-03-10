import { Component } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactsService } from '../../../../shared/services/contacts.service';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  contacts: any[] = [];
  constructor(private contactsService: ContactsService) {}
  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }
}
