import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupwiseTestwiseAnalysisComponent } from './groupwise-testwise-analysis.component';

describe('GroupwiseTestwiseAnalysisComponent', () => {
  let component: GroupwiseTestwiseAnalysisComponent;
  let fixture: ComponentFixture<GroupwiseTestwiseAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupwiseTestwiseAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupwiseTestwiseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
