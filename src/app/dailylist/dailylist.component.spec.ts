import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailylistComponent } from './dailylist.component';

describe('DailylistComponent', () => {
  let component: DailylistComponent;
  let fixture: ComponentFixture<DailylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
