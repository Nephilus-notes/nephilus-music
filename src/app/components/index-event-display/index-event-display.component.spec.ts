import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEventDisplayComponent } from './index-event-display.component';

describe('IndexEventDisplayComponent', () => {
  let component: IndexEventDisplayComponent;
  let fixture: ComponentFixture<IndexEventDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexEventDisplayComponent]
    });
    fixture = TestBed.createComponent(IndexEventDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
