import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsListUserComponent } from './requests-list-user.component';

describe('RequestsListUserComponent', () => {
  let component: RequestsListUserComponent;
  let fixture: ComponentFixture<RequestsListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
