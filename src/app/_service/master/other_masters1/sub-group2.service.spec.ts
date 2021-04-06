import { TestBed } from '@angular/core/testing';

import { SubGroup2Service } from './sub-group2.service';

describe('SubGroup2Service', () => {
  let service: SubGroup2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGroup2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
