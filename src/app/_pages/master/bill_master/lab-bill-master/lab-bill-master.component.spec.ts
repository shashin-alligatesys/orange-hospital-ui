import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBillMasterComponent } from './lab-bill-master.component';

describe('LabBillMasterComponent', () => {
  let component: LabBillMasterComponent;
  let fixture: ComponentFixture<LabBillMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabBillMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabBillMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
