import { TestBed } from '@angular/core/testing';

import { DoctorReferenceService } from './doctor-reference.service';

describe('DoctorReferenceService', () => {
  let service: DoctorReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
