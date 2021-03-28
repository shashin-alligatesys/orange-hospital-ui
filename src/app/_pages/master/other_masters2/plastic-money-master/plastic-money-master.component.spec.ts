import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticMoneyMasterComponent } from './plastic-money-master.component';

describe('PlasticMoneyMasterComponent', () => {
  let component: PlasticMoneyMasterComponent;
  let fixture: ComponentFixture<PlasticMoneyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasticMoneyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticMoneyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
