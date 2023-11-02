import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSetlistComponent } from './single-setlist.component';

describe('SingleSetlistComponent', () => {
  let component: SingleSetlistComponent;
  let fixture: ComponentFixture<SingleSetlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSetlistComponent]
    });
    fixture = TestBed.createComponent(SingleSetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
