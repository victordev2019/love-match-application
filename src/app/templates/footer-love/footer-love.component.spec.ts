import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoveComponent } from './footer-love.component';

describe('FooterLoveComponent', () => {
  let component: FooterLoveComponent;
  let fixture: ComponentFixture<FooterLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLoveComponent]
    });
    fixture = TestBed.createComponent(FooterLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
