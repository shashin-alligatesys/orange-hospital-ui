import { TestBed } from '@angular/core/testing';

import { OpdhealthcheckupRefundService } from './opdhealthcheckup-refund.service';

describe('OpdhealthcheckupRefundService', () => {
  let service: OpdhealthcheckupRefundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdhealthcheckupRefundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
