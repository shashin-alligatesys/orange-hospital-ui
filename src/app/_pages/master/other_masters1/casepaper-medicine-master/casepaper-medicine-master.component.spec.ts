import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasepaperMedicineMasterComponent } from './casepaper-medicine-master.component';

describe('CasepaperMedicineMasterComponent', () => {
  let component: CasepaperMedicineMasterComponent;
  let fixture: ComponentFixture<CasepaperMedicineMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasepaperMedicineMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasepaperMedicineMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
