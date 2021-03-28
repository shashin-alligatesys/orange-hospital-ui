import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLabTestMasterComponent } from './external-lab-test-master.component';

describe('ExternalLabTestMasterComponent', () => {
  let component: ExternalLabTestMasterComponent;
  let fixture: ComponentFixture<ExternalLabTestMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLabTestMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLabTestMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
