import { TestBed } from '@angular/core/testing';

import { DailyserviceService } from './dailyservice.service';

describe('DailyserviceService', () => {
  let service: DailyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
