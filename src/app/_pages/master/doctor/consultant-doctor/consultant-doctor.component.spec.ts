import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantDoctorComponent } from './consultant-doctor.component';

describe('ConsultantDoctorComponent', () => {
  let component: ConsultantDoctorComponent;
  let fixture: ComponentFixture<ConsultantDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
