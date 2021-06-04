import { TestBed } from '@angular/core/testing';

import { DailymtoserviceService } from './dailymtoservice.service';

describe('DailymtoserviceService', () => {
  let service: DailymtoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailymtoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
