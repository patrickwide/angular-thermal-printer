import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptTextComponent } from '../receipt-text/receipt-text.component';

@Component({
  selector: 'app-receipt-row',
  standalone: true,
  imports: [CommonModule, ReceiptTextComponent],
  templateUrl: './receipt-row.component.html',
  styleUrl: './receipt-row.component.css',
})
export class ReceiptRowComponent {
  @Input() left?: string;
  @Input() center?: string;
  @Input() right?: string;
  @Input() gap?: number = 0;
  @Input() className?: string;

  leftSize: any;
  centerSize: any;
  rightSize: any;
}
