import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDoctorIncentiveMasterComponent } from './ref-doctor-incentive-master.component';

describe('RefDoctorIncentiveMasterComponent', () => {
  let component: RefDoctorIncentiveMasterComponent;
  let fixture: ComponentFixture<RefDoctorIncentiveMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDoctorIncentiveMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDoctorIncentiveMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
