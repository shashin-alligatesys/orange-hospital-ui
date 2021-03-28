import { TestBed } from '@angular/core/testing';

import { TaxcollectionReportService } from './taxcollection-report.service';

describe('TaxcollectionReportService', () => {
  let service: TaxcollectionReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxcollectionReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
