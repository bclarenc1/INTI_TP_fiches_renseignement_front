import { TestBed } from '@angular/core/testing';

import { FprincipaleService } from './fprincipale.service';

describe('FprincipaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FprincipaleService = TestBed.get(FprincipaleService);
    expect(service).toBeTruthy();
  });
});
