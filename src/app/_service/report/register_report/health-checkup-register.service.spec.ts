import { TestBed } from '@angular/core/testing';

import { HealthCheckupRegisterService } from './health-checkup-register.service';

describe('HealthCheckupRegisterService', () => {
  let service: HealthCheckupRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCheckupRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
