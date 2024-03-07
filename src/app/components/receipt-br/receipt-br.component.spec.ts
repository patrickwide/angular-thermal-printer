import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptBrComponent } from './receipt-br.component';

describe('ReceiptBrComponent', () => {
  let component: ReceiptBrComponent;
  let fixture: ComponentFixture<ReceiptBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptBrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
