import { TestBed } from '@angular/core/testing';

import { OpdBillService } from './opd.service';

describe('OpdService', () => {
  let service: OpdBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
