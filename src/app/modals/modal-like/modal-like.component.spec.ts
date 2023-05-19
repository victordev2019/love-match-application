import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLikeComponent } from './modal-like.component';

describe('ModalLikeComponent', () => {
  let component: ModalLikeComponent;
  let fixture: ComponentFixture<ModalLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLikeComponent]
    });
    fixture = TestBed.createComponent(ModalLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
