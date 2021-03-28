import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdTestComponent } from './ipd-test.component';

describe('IpdTestComponent', () => {
  let component: IpdTestComponent;
  let fixture: ComponentFixture<IpdTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
