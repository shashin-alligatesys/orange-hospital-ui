import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalRadioMasterComponent } from './external-radio-master.component';

describe('ExternalRadioMasterComponent', () => {
  let component: ExternalRadioMasterComponent;
  let fixture: ComponentFixture<ExternalRadioMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalRadioMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalRadioMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
