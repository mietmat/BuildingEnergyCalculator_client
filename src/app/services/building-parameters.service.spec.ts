import { TestBed } from '@angular/core/testing';

import { BuildingParametersService } from './building-parameters.service';

describe('BuildingParametersService', () => {
  let service: BuildingParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingParametersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
