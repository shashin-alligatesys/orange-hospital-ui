import { TestBed } from '@angular/core/testing';

import { WardMasterService } from './ward-master.service';

describe('WardMasterService', () => {
  let service: WardMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
