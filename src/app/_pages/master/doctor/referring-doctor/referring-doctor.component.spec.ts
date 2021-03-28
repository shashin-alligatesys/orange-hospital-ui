import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferringDoctorComponent } from './referring-doctor.component';

describe('ReferringDoctorComponent', () => {
  let component: ReferringDoctorComponent;
  let fixture: ComponentFixture<ReferringDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferringDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferringDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
