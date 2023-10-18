import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreguntasComponent } from './lista-preguntas.component';

describe('ListaPreguntasComponent', () => {
  let component: ListaPreguntasComponent;
  let fixture: ComponentFixture<ListaPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPreguntasComponent]
    });
    fixture = TestBed.createComponent(ListaPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
