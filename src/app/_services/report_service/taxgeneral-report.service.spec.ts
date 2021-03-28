import { TestBed } from '@angular/core/testing';

import { TaxgeneralReportService } from './taxgeneral-report.service';

describe('TaxgeneralReportService', () => {
  let service: TaxgeneralReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxgeneralReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
