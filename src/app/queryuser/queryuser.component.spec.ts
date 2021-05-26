import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryuserComponent } from './queryuser.component';

describe('QueryuserComponent', () => {
  let component: QueryuserComponent;
  let fixture: ComponentFixture<QueryuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
