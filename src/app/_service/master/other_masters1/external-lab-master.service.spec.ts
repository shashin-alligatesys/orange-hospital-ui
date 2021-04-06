import { TestBed } from '@angular/core/testing';

import { ExternalLabMasterService } from './external-lab-master.service';

describe('ExternalLabMasterService', () => {
  let service: ExternalLabMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalLabMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
