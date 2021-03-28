import { TestBed } from '@angular/core/testing';

import { WaterConnectionService } from './water-connection.service';

describe('WaterConnectionService', () => {
  let service: WaterConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
