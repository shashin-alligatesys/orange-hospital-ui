import { TestBed } from '@angular/core/testing';

import { ClassMasterService } from './class-master.service';

describe('ClassMasterService', () => {
  let service: ClassMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
