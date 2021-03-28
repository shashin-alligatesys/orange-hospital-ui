import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPayableEntryComponent } from './doctor-payable-entry.component';

describe('DoctorPayableEntryComponent', () => {
  let component: DoctorPayableEntryComponent;
  let fixture: ComponentFixture<DoctorPayableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPayableEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPayableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
