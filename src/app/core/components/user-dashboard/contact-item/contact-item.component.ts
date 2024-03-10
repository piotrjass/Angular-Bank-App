import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css',
})
export class ContactItemComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() cards: number = 0;
}
