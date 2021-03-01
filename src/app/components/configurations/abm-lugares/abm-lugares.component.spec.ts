import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmLugaresComponent } from './abm-lugares.component';

describe('AbmLugaresComponent', () => {
  let component: AbmLugaresComponent;
  let fixture: ComponentFixture<AbmLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmLugaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
