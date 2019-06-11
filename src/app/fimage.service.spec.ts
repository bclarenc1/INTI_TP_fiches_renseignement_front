import { TestBed } from '@angular/core/testing';

import { FimageService } from './fimage.service';

describe('FimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FimageService = TestBed.get(FimageService);
    expect(service).toBeTruthy();
  });
});
