import { TestBed } from '@angular/core/testing';

import { AdminAccountyearService } from './accountyear.service';

describe('AdminAccountyearService', () => {
  let service: AdminAccountyearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAccountyearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
