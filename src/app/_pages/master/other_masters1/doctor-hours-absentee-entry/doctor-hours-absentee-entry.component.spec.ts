import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHoursAbsenteeEntryComponent } from './doctor-hours-absentee-entry.component';

describe('DoctorHoursAbsenteeEntryComponent', () => {
  let component: DoctorHoursAbsenteeEntryComponent;
  let fixture: ComponentFixture<DoctorHoursAbsenteeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorHoursAbsenteeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorHoursAbsenteeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
