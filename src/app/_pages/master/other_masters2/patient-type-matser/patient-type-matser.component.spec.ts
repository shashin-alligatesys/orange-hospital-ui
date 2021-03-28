import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTypeMatserComponent } from './patient-type-matser.component';

describe('PatientTypeMatserComponent', () => {
  let component: PatientTypeMatserComponent;
  let fixture: ComponentFixture<PatientTypeMatserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTypeMatserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTypeMatserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
