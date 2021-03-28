import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdhealthCheckupRefundComponent } from './opdhealth-checkup-refund.component';

describe('OpdhealthCheckupRefundComponent', () => {
  let component: OpdhealthCheckupRefundComponent;
  let fixture: ComponentFixture<OpdhealthCheckupRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdhealthCheckupRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdhealthCheckupRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
