import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSucursalesComponent } from './mis-sucursales.component';

describe('MisSucursalesComponent', () => {
  let component: MisSucursalesComponent;
  let fixture: ComponentFixture<MisSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
