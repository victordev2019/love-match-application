import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveMatchCardComponent } from './love-match-card.component';

describe('LoveMatchCardComponent', () => {
  let component: LoveMatchCardComponent;
  let fixture: ComponentFixture<LoveMatchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoveMatchCardComponent]
    });
    fixture = TestBed.createComponent(LoveMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
