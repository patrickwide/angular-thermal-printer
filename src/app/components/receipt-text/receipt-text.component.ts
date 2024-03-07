import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receipt-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receipt-text.component.html',
  styleUrl: './receipt-text.component.css',
})
export class ReceiptTextComponent {
  @Input() bold?: boolean;
  @Input() underline?: boolean;
  @Input() invert?: boolean;
  @Input() inline?: boolean;
  @Input() font_size?: number;
  @Input() align?: string;
}
