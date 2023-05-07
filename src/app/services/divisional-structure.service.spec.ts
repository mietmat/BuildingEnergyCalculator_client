import { TestBed } from '@angular/core/testing';

import { DivisionalStructureService } from './divisional-structure.service';

describe('DivisionalStructureService', () => {
  let service: DivisionalStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionalStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
