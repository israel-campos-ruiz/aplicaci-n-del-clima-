import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaVistaComponent } from './clima-vista.component';

describe('ClimaVistaComponent', () => {
  let component: ClimaVistaComponent;
  let fixture: ComponentFixture<ClimaVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
