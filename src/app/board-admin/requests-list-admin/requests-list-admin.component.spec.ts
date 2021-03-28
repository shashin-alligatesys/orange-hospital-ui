import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsListAdminComponent } from './requests-list-admin.component';

describe('RequestsListAdminComponent', () => {
  let component: RequestsListAdminComponent;
  let fixture: ComponentFixture<RequestsListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
