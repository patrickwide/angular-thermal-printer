import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptRowComponent } from './receipt-row.component';

describe('ReceiptRowComponent', () => {
  let component: ReceiptRowComponent;
  let fixture: ComponentFixture<ReceiptRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
