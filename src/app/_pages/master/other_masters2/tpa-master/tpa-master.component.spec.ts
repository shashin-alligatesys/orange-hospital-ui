import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpaMasterComponent } from './tpa-master.component';

describe('TpaMasterComponent', () => {
  let component: TpaMasterComponent;
  let fixture: ComponentFixture<TpaMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpaMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
