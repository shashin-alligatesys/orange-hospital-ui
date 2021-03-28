import { TestBed } from '@angular/core/testing';

import { MasterCategoryService } from './master-category.service';

describe('MasterCategoryService', () => {
  let service: MasterCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
