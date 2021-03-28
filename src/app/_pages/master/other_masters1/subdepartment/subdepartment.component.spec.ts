import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdepartmentComponent } from './subdepartment.component';

describe('SubdepartmentComponent', () => {
  let component: SubdepartmentComponent;
  let fixture: ComponentFixture<SubdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
