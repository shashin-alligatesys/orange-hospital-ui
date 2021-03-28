import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRegisterComponent } from './lab-register.component';

describe('LabRegisterComponent', () => {
  let component: LabRegisterComponent;
  let fixture: ComponentFixture<LabRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
