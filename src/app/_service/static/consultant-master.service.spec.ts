import { TestBed } from '@angular/core/testing';

import { ConsultantMasterService } from './consultant-master.service';

describe('ConsultantMasterService', () => {
  let service: ConsultantMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultantMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
