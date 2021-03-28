import { TestBed } from '@angular/core/testing';

import { TaxDemandService } from './tax-demand.service';

describe('TaxDemandService', () => {
  let service: TaxDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
