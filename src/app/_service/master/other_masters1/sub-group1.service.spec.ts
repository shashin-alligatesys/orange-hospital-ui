import { TestBed } from '@angular/core/testing';

import { SubGroup1Service } from './sub-group1.service';

describe('SubGroup1Service', () => {
  let service: SubGroup1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGroup1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
