import { TestBed } from '@angular/core/testing';

import { OpdhealthCheckupService } from './opdhealth-checkup.service';

describe('OpdhealthCheckupService', () => {
  let service: OpdhealthCheckupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdhealthCheckupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
