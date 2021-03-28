import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLabMasterComponent } from './external-lab-master.component';

describe('ExternalLabMasterComponent', () => {
  let component: ExternalLabMasterComponent;
  let fixture: ComponentFixture<ExternalLabMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLabMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLabMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
