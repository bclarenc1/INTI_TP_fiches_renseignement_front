import { TestBed } from '@angular/core/testing';

import { ResplegalService } from './resplegal.service';

describe('ResplegalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResplegalService = TestBed.get(ResplegalService);
    expect(service).toBeTruthy();
  });
});
