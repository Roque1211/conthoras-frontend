import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydailyComponent } from './querydaily.component';

describe('QuerydailyComponent', () => {
  let component: QuerydailyComponent;
  let fixture: ComponentFixture<QuerydailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerydailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
