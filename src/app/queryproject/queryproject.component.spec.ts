import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryprojectComponent } from './queryproject.component';

describe('QueryprojectComponent', () => {
  let component: QueryprojectComponent;
  let fixture: ComponentFixture<QueryprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
