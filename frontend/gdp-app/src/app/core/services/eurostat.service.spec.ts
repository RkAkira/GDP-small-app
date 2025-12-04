import { TestBed } from '@angular/core/testing';

import { Eurostat } from './eurostat.service';

describe('Eurostat', () => {
  let service: Eurostat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Eurostat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
