import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-receipt-br',
  standalone: true,
  imports: [],
  templateUrl: './receipt-br.component.html',
  styleUrl: './receipt-br.component.css',
})
export class ReceiptBrComponent {
  @Input() className: string | undefined;

  @HostBinding('class')
  get classList() {
    return `receipt-br ${this.className}`;
  }
}
