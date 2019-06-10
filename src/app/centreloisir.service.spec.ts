import { TestBed } from '@angular/core/testing';

import { CentreloisirService } from './centreloisir.service';

describe('CentreloisirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentreloisirService = TestBed.get(CentreloisirService);
    expect(service).toBeTruthy();
  });
});
