import { TestBed } from '@angular/core/testing';

import { ExternalRadioMasterService } from './external-radio-master.service';

describe('ExternalRadioMasterService', () => {
  let service: ExternalRadioMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalRadioMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
