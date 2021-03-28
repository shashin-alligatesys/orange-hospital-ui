import { TestBed } from '@angular/core/testing';

import { DemandrecoveryService } from './demandrecovery.service';

describe('DemandrecoveryService', () => {
  let service: DemandrecoveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandrecoveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
