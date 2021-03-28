import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRefundComponent } from './lab-refund.component';

describe('LabRefundComponent', () => {
  let component: LabRefundComponent;
  let fixture: ComponentFixture<LabRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
