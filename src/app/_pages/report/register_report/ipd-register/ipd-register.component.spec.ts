import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdRegisterComponent } from './ipd-register.component';

describe('IpdRegisterComponent', () => {
  let component: IpdRegisterComponent;
  let fixture: ComponentFixture<IpdRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
