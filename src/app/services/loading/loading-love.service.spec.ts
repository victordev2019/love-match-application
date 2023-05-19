import { TestBed } from '@angular/core/testing';

import { LoadingLoveService } from './loading-love.service';

describe('LoadingLoveService', () => {
  let service: LoadingLoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingLoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
