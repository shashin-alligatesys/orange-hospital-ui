import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBillMasterComponent } from './radio-bill-master.component';

describe('RadioBillMasterComponent', () => {
  let component: RadioBillMasterComponent;
  let fixture: ComponentFixture<RadioBillMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBillMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBillMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
