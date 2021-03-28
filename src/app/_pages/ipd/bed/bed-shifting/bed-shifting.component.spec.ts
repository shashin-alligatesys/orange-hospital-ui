import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedShiftingComponent } from './bed-shifting.component';

describe('BedShiftingComponent', () => {
  let component: BedShiftingComponent;
  let fixture: ComponentFixture<BedShiftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedShiftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedShiftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
