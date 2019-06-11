import { TestBed } from '@angular/core/testing';

import { FvaccinationService } from './fvaccination.service';

describe('FvaccinationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FvaccinationService = TestBed.get(FvaccinationService);
    expect(service).toBeTruthy();
  });
});
