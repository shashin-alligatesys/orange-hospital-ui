import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdAdvancedComponent } from './ipd-advanced.component';

describe('IpdAdvancedComponent', () => {
  let component: IpdAdvancedComponent;
  let fixture: ComponentFixture<IpdAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
