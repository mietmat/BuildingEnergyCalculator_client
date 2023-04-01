import { TestBed } from '@angular/core/testing';

import { BuildingMaterialService } from './building-material.service';

describe('BuildingMaterialService', () => {
  let service: BuildingMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
