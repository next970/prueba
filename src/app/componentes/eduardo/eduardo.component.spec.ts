import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDUARDOComponent } from './eduardo.component';

describe('EDUARDOComponent', () => {
  let component: EDUARDOComponent;
  let fixture: ComponentFixture<EDUARDOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDUARDOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDUARDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
