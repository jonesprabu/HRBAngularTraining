import { TestBed } from '@angular/core/testing';

import { NewBookingsService } from './new-bookings.service';

describe('NewBookingsService', () => {
  let service: NewBookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewBookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
