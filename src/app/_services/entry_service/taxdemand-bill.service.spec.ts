import { TestBed } from '@angular/core/testing';

import { TaxdemandBillService } from './taxdemand-bill.service';

describe('TaxdemandBillService', () => {
  let service: TaxdemandBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxdemandBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
