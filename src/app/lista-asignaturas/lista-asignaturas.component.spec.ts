import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsignaturasComponent } from './lista-asignaturas.component';

describe('ListaAsignaturasComponent', () => {
  let component: ListaAsignaturasComponent;
  let fixture: ComponentFixture<ListaAsignaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAsignaturasComponent]
    });
    fixture = TestBed.createComponent(ListaAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
