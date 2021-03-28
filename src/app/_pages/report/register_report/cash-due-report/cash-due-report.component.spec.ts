import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDueReportComponent } from './cash-due-report.component';

describe('CashDueReportComponent', () => {
  let component: CashDueReportComponent;
  let fixture: ComponentFixture<CashDueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
