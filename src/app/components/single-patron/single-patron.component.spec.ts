import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePatronComponent } from './single-patron.component';

describe('SinglePatronComponent', () => {
  let component: SinglePatronComponent;
  let fixture: ComponentFixture<SinglePatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePatronComponent]
    });
    fixture = TestBed.createComponent(SinglePatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
