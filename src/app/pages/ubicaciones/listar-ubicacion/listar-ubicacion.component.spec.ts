import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUbicacionComponent } from './listar-ubicacion.component';

describe('ListarUbicacionComponent', () => {
  let component: ListarUbicacionComponent;
  let fixture: ComponentFixture<ListarUbicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUbicacionComponent]
    });
    fixture = TestBed.createComponent(ListarUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
