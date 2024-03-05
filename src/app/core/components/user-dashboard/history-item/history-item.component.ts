import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-item.component.html',
  styleUrl: './history-item.component.css',
})
export class HistoryItemComponent {
  @Input() person: string = '';
  @Input() date: string = '';
  @Input() amount: number = 0;
  @Input() type: string = '';
}
