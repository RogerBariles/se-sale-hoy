import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmAdminUsersComponent } from './abm-admin-users.component';

describe('AbmAdminUsersComponent', () => {
  let component: AbmAdminUsersComponent;
  let fixture: ComponentFixture<AbmAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmAdminUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
