import { TestBed } from '@angular/core/testing';

import { InsuranceMasterService } from './insurance-master.service';

describe('InsuranceMasterService', () => {
  let service: InsuranceMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
