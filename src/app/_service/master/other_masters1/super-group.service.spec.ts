import { TestBed } from '@angular/core/testing';

import { SuperGroupService } from './super-group.service';

describe('SuperGroupService', () => {
  let service: SuperGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
