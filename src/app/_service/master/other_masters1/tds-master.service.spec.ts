import { TestBed } from '@angular/core/testing';

import { TdsMasterService } from './tds-master.service';

describe('TdsMasterService', () => {
  let service: TdsMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdsMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
