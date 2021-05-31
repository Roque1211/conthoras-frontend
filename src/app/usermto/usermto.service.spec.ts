import { TestBed } from '@angular/core/testing';

import { UsermtoService } from './usermto.service';

describe('UsermtoService', () => {
  let service: UsermtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
