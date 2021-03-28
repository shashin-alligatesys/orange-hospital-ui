import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdReceiptRegisterComponent } from './ipd-receipt-register.component';

describe('IpdReceiptRegisterComponent', () => {
  let component: IpdReceiptRegisterComponent;
  let fixture: ComponentFixture<IpdReceiptRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdReceiptRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdReceiptRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
