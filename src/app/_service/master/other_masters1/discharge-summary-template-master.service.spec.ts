import { TestBed } from '@angular/core/testing';

import { DischargeSummaryTemplateMasterService } from './discharge-summary-template-master.service';

describe('DischargeSummaryTemplateMasterService', () => {
  let service: DischargeSummaryTemplateMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargeSummaryTemplateMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
