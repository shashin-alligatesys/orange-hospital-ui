import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashlessAuthorizedComponent } from './cashless-authorized.component';

describe('CashlessAuthorizedComponent', () => {
  let component: CashlessAuthorizedComponent;
  let fixture: ComponentFixture<CashlessAuthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashlessAuthorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashlessAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
