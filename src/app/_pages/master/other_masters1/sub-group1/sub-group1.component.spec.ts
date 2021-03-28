import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGroup1Component } from './sub-group1.component';

describe('SubGroup1Component', () => {
  let component: SubGroup1Component;
  let fixture: ComponentFixture<SubGroup1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGroup1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
