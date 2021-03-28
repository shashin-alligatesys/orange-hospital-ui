import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeClearanceComponent } from './discharge-clearance.component';

describe('DischargeClearanceComponent', () => {
  let component: DischargeClearanceComponent;
  let fixture: ComponentFixture<DischargeClearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargeClearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
