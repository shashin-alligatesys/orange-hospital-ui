import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdhealthCheckupComponent } from './opdhealth-checkup.component';

describe('OpdhealthCheckupComponent', () => {
  let component: OpdhealthCheckupComponent;
  let fixture: ComponentFixture<OpdhealthCheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdhealthCheckupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdhealthCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
