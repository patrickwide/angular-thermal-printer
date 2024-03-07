import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptTextComponent } from './receipt-text.component';

describe('ReceiptTextComponent', () => {
  let component: ReceiptTextComponent;
  let fixture: ComponentFixture<ReceiptTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
