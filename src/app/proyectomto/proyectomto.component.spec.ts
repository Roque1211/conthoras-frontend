import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectomtoComponent } from './proyectomto.component';

describe('ProyectomtoComponent', () => {
  let component: ProyectomtoComponent;
  let fixture: ComponentFixture<ProyectomtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectomtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectomtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
