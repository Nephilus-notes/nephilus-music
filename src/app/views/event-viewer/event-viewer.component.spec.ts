import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewerComponent } from './event-viewer.component';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

import { LiveEvent } from 'src/app/models/liveEvent';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventViewerComponent', () => {
  let component: EventViewerComponent;
  let fixture: ComponentFixture<EventViewerComponent>;
  let mockApiService: any;
  const events: Array<LiveEvent> = [
    {
      id: 1,
      title: 'test event at Smok N Pi',
      description: 'This is a test event',
      start_date: new Date('10-27-2023 06:00:00'),
      end_date: new Date('10-27-2023 09:00:00'),
      venue_name: 'Cafe Smok N Pi',
      venue_address: '12636 MO-21',
      venue_city: 'DeSoto',
      venue_state: 'MO',
      venue_zip_code: '63020',
      venue_country: 'USA',
      venue_url: 'http://www.cafesmoknpi.com/',
      venue_phone: '(636)337-5577',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      event_type: 'Test Type',
      short_description: 'This is my second test event',
    },
    {
      id: 2,
      title: 'Smok N Pi',
      description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      start_date: new Date('12-02-2023 18:00:00'),
      end_date: new Date('12-02-2023 21:00:00'),
      venue_name: 'Smok N Pi',
      venue_address: '2636 Hwy 21',
      venue_city: 'DeSoto',
      venue_state: 'Missouri',
      venue_zip_code: '12345',
      venue_country: 'US',
      venue_url: 'http://www.cafesmoknpi.com/',
      venue_phone: '(636) 337-5577',
      created_at: new Date('11-29-2023'),
      updated_at: new Date('11-29-2023'),
      deleted_at: new Date('11-29-2023'),
      deleted: false,
      event_type: 'restaurant',
      short_description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      image_url: '/assets/img/cafe_smok_n_pi.jfif',
    },
    {
      id: 3,
      title: 'Smok N Pi',
      description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      start_date: new Date('12-22-2023 18:00:00'),
      end_date: new Date('12-22-2023 21:00:00'),
      venue_name: 'Smok N Pi',
      venue_address: '2636 Hwy 21',
      venue_city: 'DeSoto',
      venue_state: 'Missouri',
      venue_zip_code: '12345',
      venue_country: 'US',
      venue_url: 'http://www.cafesmoknpi.com/',
      venue_phone: '(636) 337-5577',
      created_at: new Date('11-29-2023'),
      updated_at: new Date('11-29-2023'),
      deleted_at: new Date('11-29-2023'),
      deleted: false,
      event_type: 'restaurant',
      short_description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      image_url: '/assets/img/cafe_smok_n_pi.jfif',
    },
  ];
  let show_list: Array<LiveEvent> = [];
  // const mockEventsList = {
  //   allEvents: of({})
  // }

  beforeEach(async() => {
    mockApiService = jasmine.createSpyObj(['getAllEvents', 'populateEvents']);      
    TestBed.configureTestingModule({
      declarations: [EventViewerComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ApiService,
          useValue: mockApiService,
        },
      ],
    }).compileComponents();
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventViewerComponent);
    TestBed.inject(mockApiService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    console.warn(events)
    // debug
    mockApiService.populateEvents.and.returnValue(events);
    // console.warn(events)

    expect(component).toBeTruthy();
  });

  it('#getAllEvents should return multiple events (not async)', (done: DoneFn) => {
    // console.warn(events)
    // mockApiService.getAllEvents.and.returnValue(events);
    // done();
    pending();
  });

  it('populateEvents should determine if there are events in the cache and return them or call the getAllEvents function', () => {
    pending();
  });

  it('sortEventsByDate should sort the events by date', () => {
    pending();
  });

  it('showOnlyUpcoming should return only upcoming events', () => {
    pending();
  });
});
