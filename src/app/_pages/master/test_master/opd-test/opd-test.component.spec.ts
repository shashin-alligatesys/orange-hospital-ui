import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdTestComponent } from './opd-test.component';

describe('OpdTestComponent', () => {
  let component: OpdTestComponent;
  let fixture: ComponentFixture<OpdTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
