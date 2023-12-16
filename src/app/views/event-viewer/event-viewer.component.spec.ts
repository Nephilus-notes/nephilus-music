import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewerComponent } from './event-viewer.component';
import { ApiService } from 'src/app/services/api.service';

describe('EventViewerComponent', () => {
  let component: EventViewerComponent;
  let fixture: ComponentFixture<EventViewerComponent>;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventViewerComponent],
      imports: [ ],
      providers: [ApiService]
    }).compileComponents();
    fixture = TestBed.createComponent(EventViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
