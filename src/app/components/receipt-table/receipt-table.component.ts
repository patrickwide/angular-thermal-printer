import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receipt-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receipt-table.component.html',
  styleUrl: './receipt-table.component.css',
})
export class ReceiptTableComponent {
  @Input() headers: string[] = [];
  @Input() items: any[] = [];
}
