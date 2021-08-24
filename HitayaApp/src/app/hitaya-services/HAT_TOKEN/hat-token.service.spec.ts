import { TestBed } from '@angular/core/testing';

import { HatTokenService } from './hat-token.service';

describe('HatTokenService', () => {
  let service: HatTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HatTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
