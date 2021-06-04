import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailymtoComponent } from './dailymto.component';

describe('DailymtoComponent', () => {
  let component: DailymtoComponent;
  let fixture: ComponentFixture<DailymtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailymtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailymtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
