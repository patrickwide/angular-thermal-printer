import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receipt-printer',
  standalone: true,
  imports: [],
  templateUrl: './receipt-printer.component.html',
  styleUrl: './receipt-printer.component.css',
})
export class ReceiptPrinterComponent {
  public childMessage: string = 'Hello from the child!';

  @Input() widthInMm: number;

  constructor() {
    this.widthInMm = 80;
  }

  ngOnInit(): void {}
}
