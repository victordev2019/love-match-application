import { TestBed } from '@angular/core/testing';

import { LoveMatchApiService } from './love-match-api.service';

describe('LoveMatchApiService', () => {
  let service: LoveMatchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoveMatchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
