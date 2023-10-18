import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAppComponent } from './inicio-app.component';

describe('InicioAppComponent', () => {
  let component: InicioAppComponent;
  let fixture: ComponentFixture<InicioAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioAppComponent]
    });
    fixture = TestBed.createComponent(InicioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
