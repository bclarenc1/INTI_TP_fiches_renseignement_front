import { TestBed } from '@angular/core/testing';

import { FmedicaleService } from './fmedicale.service';

describe('FmedicaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FmedicaleService = TestBed.get(FmedicaleService);
    expect(service).toBeTruthy();
  });
});
