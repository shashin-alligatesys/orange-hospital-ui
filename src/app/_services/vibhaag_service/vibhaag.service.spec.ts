import { TestBed } from '@angular/core/testing';

import { VibhaagService } from './vibhaag.service';

describe('VibhaagService', () => {
  let service: VibhaagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VibhaagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
