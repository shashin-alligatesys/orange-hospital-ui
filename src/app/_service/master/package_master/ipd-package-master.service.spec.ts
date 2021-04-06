import { TestBed } from '@angular/core/testing';

import { IpdPackageMasterService } from './ipd-package-master.service';

describe('IpdPackageMasterService', () => {
  let service: IpdPackageMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpdPackageMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
