import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDuesComponent } from './cash-dues.component';

describe('CashDuesComponent', () => {
  let component: CashDuesComponent;
  let fixture: ComponentFixture<CashDuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
