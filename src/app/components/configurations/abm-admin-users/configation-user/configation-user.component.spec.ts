import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigationUserComponent } from './configation-user.component';

describe('ConfigationUserComponent', () => {
  let component: ConfigationUserComponent;
  let fixture: ComponentFixture<ConfigationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
