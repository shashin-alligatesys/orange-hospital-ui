import { TestBed } from '@angular/core/testing';

import { PlasticMoneyMasterService } from './plastic-money-master.service';

describe('PlasticMoneyMasterService', () => {
  let service: PlasticMoneyMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlasticMoneyMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
