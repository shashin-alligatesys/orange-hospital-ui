import { TestBed } from '@angular/core/testing';

import { TpaMasterService } from './tpa-master.service';

describe('TpaMasterService', () => {
  let service: TpaMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpaMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
