import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathSummaryComponent } from './death-summary.component';

describe('DeathSummaryComponent', () => {
  let component: DeathSummaryComponent;
  let fixture: ComponentFixture<DeathSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
