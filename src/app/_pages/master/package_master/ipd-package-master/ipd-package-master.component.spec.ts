import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdPackageMasterComponent } from './ipd-package-master.component';

describe('IpdPackageMasterComponent', () => {
  let component: IpdPackageMasterComponent;
  let fixture: ComponentFixture<IpdPackageMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdPackageMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdPackageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
