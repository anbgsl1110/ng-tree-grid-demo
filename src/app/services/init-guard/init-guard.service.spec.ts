import { TestBed } from '@angular/core/testing';

import { InitGuardService } from './init-guard.service';

describe('InitGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitGuardService = TestBed.get(InitGuardService);
    expect(service).toBeTruthy();
  });
});
