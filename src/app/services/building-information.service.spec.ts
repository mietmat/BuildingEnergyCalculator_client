import { TestBed } from '@angular/core/testing';

import { BuildingInformationService } from './building-information.service';

describe('BuildingInformationService', () => {
  let service: BuildingInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
