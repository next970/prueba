import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLenguajeComponent } from './detalles-lenguaje.component';

describe('DetallesLenguajeComponent', () => {
  let component: DetallesLenguajeComponent;
  let fixture: ComponentFixture<DetallesLenguajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesLenguajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
