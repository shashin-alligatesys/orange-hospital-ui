import { TestBed } from '@angular/core/testing';

import { TaxcollectionReciptService } from './taxcollection-recipt.service';

describe('TaxcollectionReciptService', () => {
  let service: TaxcollectionReciptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxcollectionReciptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
