import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsSucursalComponent } from './configurations-sucursal.component';

describe('ConfigurationsSucursalComponent', () => {
  let component: ConfigurationsSucursalComponent;
  let fixture: ComponentFixture<ConfigurationsSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationsSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationsSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
