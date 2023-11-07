import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUbicacionComponent } from './crear-ubicacion.component';

describe('CrearUbicacionComponent', () => {
  let component: CrearUbicacionComponent;
  let fixture: ComponentFixture<CrearUbicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearUbicacionComponent]
    });
    fixture = TestBed.createComponent(CrearUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
