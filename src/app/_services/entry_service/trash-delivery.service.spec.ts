import { TestBed } from '@angular/core/testing';

import { TrashDeliveryService } from './trash-delivery.service';

describe('TrashDeliveryService', () => {
  let service: TrashDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrashDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
