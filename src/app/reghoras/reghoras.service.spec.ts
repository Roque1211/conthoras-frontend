import { TestBed } from '@angular/core/testing';

import { ReghorasService } from './reghoras.service';

describe('ReghorasService', () => {
  let service: ReghorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReghorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
