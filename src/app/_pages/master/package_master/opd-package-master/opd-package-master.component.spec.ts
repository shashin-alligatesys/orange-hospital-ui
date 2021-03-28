import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdPackageMasterComponent } from './opd-package-master.component';

describe('OpdPackageMasterComponent', () => {
  let component: OpdPackageMasterComponent;
  let fixture: ComponentFixture<OpdPackageMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdPackageMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdPackageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
