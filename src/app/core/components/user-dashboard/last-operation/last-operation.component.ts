import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryItemComponent } from '../history-item/history-item.component';
import { HistoryService } from '../../../../shared/services/history.service';
@Component({
  selector: 'app-last-operation',
  standalone: true,
  imports: [CommonModule, HistoryItemComponent],
  templateUrl: './last-operation.component.html',
  styleUrl: './last-operation.component.css',
})
export class LastOperationComponent {
  historyItem: any;
  constructor(private historyService: HistoryService) {}
  ngOnInit(): void {
    const history = this.historyService.getHistory();
    this.historyItem = history.length > 0 ? history[history.length - 1] : null; // Wybierz ostatni element z tablicy historii
  }
}
