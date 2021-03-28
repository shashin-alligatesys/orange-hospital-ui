import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioRefundComponent } from './radio-refund.component';

describe('RadioRefundComponent', () => {
  let component: RadioRefundComponent;
  let fixture: ComponentFixture<RadioRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
