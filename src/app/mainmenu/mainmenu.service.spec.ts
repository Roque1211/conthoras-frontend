import { TestBed } from '@angular/core/testing';

import { MainMenuService } from './mainmenu.service';

describe('MainmenuService', () => {
  let service: MainMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
