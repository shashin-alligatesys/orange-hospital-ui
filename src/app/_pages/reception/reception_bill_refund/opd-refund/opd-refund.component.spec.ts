import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdRefundComponent } from './opd-refund.component';

describe('OpdRefundComponent', () => {
  let component: OpdRefundComponent;
  let fixture: ComponentFixture<OpdRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
