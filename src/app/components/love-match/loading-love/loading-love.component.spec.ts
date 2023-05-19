import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLoveComponent } from './loading-love.component';

describe('LoadingLoveComponent', () => {
  let component: LoadingLoveComponent;
  let fixture: ComponentFixture<LoadingLoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingLoveComponent]
    });
    fixture = TestBed.createComponent(LoadingLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
