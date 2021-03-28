import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdBillMasterComponent } from './opd-bill-master.component';

describe('OpdBillMasterComponent', () => {
  let component: OpdBillMasterComponent;
  let fixture: ComponentFixture<OpdBillMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdBillMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdBillMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
