import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveMatchComponent } from './love-match.component';

describe('MatchLoveComponent', () => {
  let component: LoveMatchComponent;
  let fixture: ComponentFixture<LoveMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoveMatchComponent]
    });
    fixture = TestBed.createComponent(LoveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
