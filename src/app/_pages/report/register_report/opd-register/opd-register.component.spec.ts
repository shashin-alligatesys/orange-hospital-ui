import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdRegisterComponent } from './opd-register.component';

describe('OpdRegisterComponent', () => {
  let component: OpdRegisterComponent;
  let fixture: ComponentFixture<OpdRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
