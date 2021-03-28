import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailSheetComponent } from './bill-detail-sheet.component';

describe('BillDetailSheetComponent', () => {
  let component: BillDetailSheetComponent;
  let fixture: ComponentFixture<BillDetailSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillDetailSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
