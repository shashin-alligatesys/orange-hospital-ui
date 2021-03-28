import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalIpdBillComponent } from './final-ipd-bill.component';

describe('FinalIpdBillComponent', () => {
  let component: FinalIpdBillComponent;
  let fixture: ComponentFixture<FinalIpdBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalIpdBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalIpdBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
