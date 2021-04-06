import { TestBed } from '@angular/core/testing';

import { CasepaperMedicineMasterService } from './casepaper-medicine-master.service';

describe('CasepaperMedicineMasterService', () => {
  let service: CasepaperMedicineMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasepaperMedicineMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
