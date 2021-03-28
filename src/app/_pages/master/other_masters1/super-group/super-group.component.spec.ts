import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperGroupComponent } from './super-group.component';

describe('SuperGroupComponent', () => {
  let component: SuperGroupComponent;
  let fixture: ComponentFixture<SuperGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
