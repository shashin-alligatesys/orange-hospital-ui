import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGroup2Component } from './sub-group2.component';

describe('SubGroup2Component', () => {
  let component: SubGroup2Component;
  let fixture: ComponentFixture<SubGroup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGroup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
