import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermtoComponent } from './usermto.component';

describe('UsermtoComponent', () => {
  let component: UsermtoComponent;
  let fixture: ComponentFixture<UsermtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
