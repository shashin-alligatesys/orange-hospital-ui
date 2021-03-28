import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeSummaryTemplateMasterComponent } from './discharge-summary-template-master.component';

describe('DischargeSummaryTemplateMasterComponent', () => {
  let component: DischargeSummaryTemplateMasterComponent;
  let fixture: ComponentFixture<DischargeSummaryTemplateMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargeSummaryTemplateMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeSummaryTemplateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
