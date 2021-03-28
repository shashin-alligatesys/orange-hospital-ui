import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorIncentiveMasterComponent } from './doctor-incentive-master.component';

describe('DoctorIncentiveMasterComponent', () => {
  let component: DoctorIncentiveMasterComponent;
  let fixture: ComponentFixture<DoctorIncentiveMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorIncentiveMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorIncentiveMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
