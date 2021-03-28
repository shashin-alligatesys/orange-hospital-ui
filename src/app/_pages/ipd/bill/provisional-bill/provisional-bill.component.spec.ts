import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalBillComponent } from './provisional-bill.component';

describe('ProvisionalBillComponent', () => {
  let component: ProvisionalBillComponent;
  let fixture: ComponentFixture<ProvisionalBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionalBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
