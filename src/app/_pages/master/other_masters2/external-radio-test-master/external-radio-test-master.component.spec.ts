import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalRadioTestMasterComponent } from './external-radio-test-master.component';

describe('ExternalRadioTestMasterComponent', () => {
  let component: ExternalRadioTestMasterComponent;
  let fixture: ComponentFixture<ExternalRadioTestMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalRadioTestMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalRadioTestMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
