import { Component } from '@angular/core';
import { HistoryItemComponent } from '../history-item/history-item.component';
import { HistoryService } from '../../../../shared/services/history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [HistoryItemComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  history: any[] = [];
  constructor(private historyService: HistoryService) {}
  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }
}
