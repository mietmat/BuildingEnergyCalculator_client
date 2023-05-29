import { TestBed } from '@angular/core/testing';

import { FloorOnTheGroundService } from './floor-on-the-ground.service';

describe('FloorOnTheGroundService', () => {
  let service: FloorOnTheGroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorOnTheGroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
