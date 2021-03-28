import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioRegisterComponent } from './radio-register.component';

describe('RadioRegisterComponent', () => {
  let component: RadioRegisterComponent;
  let fixture: ComponentFixture<RadioRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
