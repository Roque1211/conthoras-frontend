import { TestBed } from '@angular/core/testing';

import { ProyectomtoService } from './proyectomto.service';

describe('ProyectomtoService', () => {
  let service: ProyectomtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectomtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
