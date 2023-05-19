import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoveComponent } from './nav-love.component';

describe('NavLoveComponent', () => {
  let component: NavLoveComponent;
  let fixture: ComponentFixture<NavLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLoveComponent]
    });
    fixture = TestBed.createComponent(NavLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
