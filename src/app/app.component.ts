import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { ReceiptPrinterComponent } from './components/receipt-printer/receipt-printer.component';
import { ReceiptTextComponent } from './components/receipt-text/receipt-text.component';
import { ReceiptLineComponent } from './components/receipt-line/receipt-line.component';
import { ReceiptBrComponent } from './components/receipt-br/receipt-br.component';
import { ReceiptRowComponent } from './components/receipt-row/receipt-row.component';
import { ReceiptTableComponent } from './components/receipt-table/receipt-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxPrintModule,
    ReceiptPrinterComponent,
    ReceiptTextComponent,
    ReceiptLineComponent,
    ReceiptBrComponent,
    ReceiptRowComponent,
    ReceiptTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tableHeaders = ['Item', 'Qty', 'Rate', 'Price'];

  tableItems = [
    { item: 'Access PPA', qty: 2, rate: 10000, price: 20000 },
    { item: 'Bonsai Dot Matrix Printer', qty: 5, rate: 13000, price: 65000 },
    { item: 'Bonsai Dot Matrix Printer', qty: 2, rate: 14000, price: 28000 },
  ];
}
