import { TestBed } from '@angular/core/testing';

import { BedmasterService } from './bedmaster.service';

describe('BedmasterService', () => {
  let service: BedmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
