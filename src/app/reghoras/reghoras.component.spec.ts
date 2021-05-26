import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReghorasComponent } from './reghoras.component';

describe('ReghorasComponent', () => {
  let component: ReghorasComponent;
  let fixture: ComponentFixture<ReghorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReghorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReghorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
