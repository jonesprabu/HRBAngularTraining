import { TestBed } from '@angular/core/testing';

import { TaxiserviceService } from './taxiservice.service';

describe('TaxiserviceService', () => {
  let service: TaxiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
