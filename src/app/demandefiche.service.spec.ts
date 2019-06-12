import { TestBed } from '@angular/core/testing';

import { DemandeficheService } from './demandefiche.service';

describe('DemandeficheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeficheService = TestBed.get(DemandeficheService);
    expect(service).toBeTruthy();
  });
});
