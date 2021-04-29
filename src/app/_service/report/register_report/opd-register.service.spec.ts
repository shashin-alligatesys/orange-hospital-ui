import { TestBed } from '@angular/core/testing';

import { OpdRegisterService } from './opd-register.service';

describe('OpdRegisterService', () => {
  let service: OpdRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
