import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedStatusComponent } from './bed-status.component';

describe('BedStatusComponent', () => {
  let component: BedStatusComponent;
  let fixture: ComponentFixture<BedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
