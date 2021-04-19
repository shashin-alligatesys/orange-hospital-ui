import { TestBed } from '@angular/core/testing';

import { RadioRefundService } from './radio-refund.service';

describe('RadioRefundService', () => {
  let service: RadioRefundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioRefundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
