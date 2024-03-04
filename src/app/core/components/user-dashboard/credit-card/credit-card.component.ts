import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerIcons } from '@ng-icons/tabler-icons';
import {
  tablerBrandVisa,
  tablerLayersDifference,
} from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css',
  viewProviders: [
    provideIcons({
      tablerBrandVisa,
      tablerLayersDifference,
    }),
  ],
})
export class CreditCardComponent {
  @Input() color: string = '';
  @Input() balance: number = 100;
  @Input() last_digits: string = '';
  @Input() exp_date: string = '';
}
// tablerBrandVisa
