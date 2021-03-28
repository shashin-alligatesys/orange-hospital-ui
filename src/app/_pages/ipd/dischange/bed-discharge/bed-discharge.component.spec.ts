import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedDischargeComponent } from './bed-discharge.component';

describe('BedDischargeComponent', () => {
  let component: BedDischargeComponent;
  let fixture: ComponentFixture<BedDischargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedDischargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
