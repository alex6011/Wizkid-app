import { TestBed } from '@angular/core/testing';

import { WizkidsService } from './wizkids.service';

describe('WizkidsService', () => {
  let service: WizkidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizkidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
