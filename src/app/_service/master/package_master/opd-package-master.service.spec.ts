import { TestBed } from '@angular/core/testing';

import { OpdPackageMasterService } from './opd-package-master.service';

describe('OpdPackageMasterService', () => {
  let service: OpdPackageMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdPackageMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
