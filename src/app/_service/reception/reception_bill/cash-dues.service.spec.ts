import { TestBed } from '@angular/core/testing';

import { CashDuesService } from './cash-dues.service';

describe('CashDuesService', () => {
  let service: CashDuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashDuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
