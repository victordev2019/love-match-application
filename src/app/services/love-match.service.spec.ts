import { TestBed } from '@angular/core/testing';

import { LoveMatchService } from './love-match.service';

describe('LoveMatchService', () => {
  let service: LoveMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoveMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
