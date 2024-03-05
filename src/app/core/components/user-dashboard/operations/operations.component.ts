import { Component } from '@angular/core';
import { OperationsFormComponent } from '../operations-form/operations-form.component';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [OperationsFormComponent],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css',
})
export class OperationsComponent {}
