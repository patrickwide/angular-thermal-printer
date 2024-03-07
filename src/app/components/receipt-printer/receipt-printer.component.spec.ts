import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPrinterComponent } from './receipt-printer.component';

describe('ReceiptPrinterComponent', () => {
  let component: ReceiptPrinterComponent;
  let fixture: ComponentFixture<ReceiptPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptPrinterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
