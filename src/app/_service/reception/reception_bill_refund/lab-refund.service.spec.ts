import { TestBed } from '@angular/core/testing';

import { LabRefundService } from './lab-refund.service';

describe('LabRefundService', () => {
  let service: LabRefundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabRefundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
