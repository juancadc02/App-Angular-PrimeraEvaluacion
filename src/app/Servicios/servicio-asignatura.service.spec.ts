import { TestBed } from '@angular/core/testing';

import { ServicioAsignaturaService } from './servicio-asignatura.service';

describe('ServicioAsignaturaService', () => {
  let service: ServicioAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
