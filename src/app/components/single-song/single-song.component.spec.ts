import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSongComponent } from './single-song.component';

describe('SingleSongComponent', () => {
  let component: SingleSongComponent;
  let fixture: ComponentFixture<SingleSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSongComponent]
    });
    fixture = TestBed.createComponent(SingleSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
