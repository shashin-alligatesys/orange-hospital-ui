import { TestBed } from '@angular/core/testing';

import { TaxBillService } from './tax-bill.service';

describe('TaxBillService', () => {
  let service: TaxBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
