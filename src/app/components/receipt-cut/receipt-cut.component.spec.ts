import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptCutComponent } from './receipt-cut.component';

describe('ReceiptCutComponent', () => {
  let component: ReceiptCutComponent;
  let fixture: ComponentFixture<ReceiptCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptCutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
