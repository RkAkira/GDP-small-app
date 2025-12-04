import { TestBed } from '@angular/core/testing';

import { EurostatService } from './eurostat.service';

describe('Eurostat', () => {
  let service: EurostatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EurostatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
