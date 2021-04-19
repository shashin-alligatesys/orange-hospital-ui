import { TestBed } from '@angular/core/testing';

import { OpdRefundService } from './opd-refund.service';

describe('OpdRefundService', () => {
  let service: OpdRefundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdRefundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
