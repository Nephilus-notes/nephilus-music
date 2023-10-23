import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewerComponent } from './event-viewer.component';

describe('EventViewerComponent', () => {
  let component: EventViewerComponent;
  let fixture: ComponentFixture<EventViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventViewerComponent]
    });
    fixture = TestBed.createComponent(EventViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
