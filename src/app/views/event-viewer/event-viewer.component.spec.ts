import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { EventViewerComponent } from './event-viewer.component';
import { UpcomingPipe } from 'src/app/pipes/upcoming.pipe';
import { SortByDatePipe } from 'src/app/pipes/sort-by-date.pipe';
import { LiveEvent } from 'src/app/models/liveEvent';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EventViewerComponent', () => {
  let component: EventViewerComponent;
  let fixture: ComponentFixture<EventViewerComponent>;
  let apiService: ApiService;
  let events: Array<LiveEvent> ;
  let show_list: Array<LiveEvent> = [];
  let httpClient: HttpClientTestingModule;
  // const mockEventsList = {
  //   allEvents: of({})
  // }

  beforeEach(async() => {
    events = [
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
    // mockApiService = jasmine.createSpyObj(['getAllEvents', 'cacheEvents']);      
    TestBed.configureTestingModule({
      declarations: [EventViewerComponent,UpcomingPipe,
        SortByDatePipe,],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        
        {
          provide: HttpClientTestingModule,
          useValue: apiService,
        },
      ],
    }).compileComponents();
    apiService = TestBed.inject(ApiService);
    apiService.events = events;
    spyOn(apiService, 'getAllEvents').and.returnValue(of(events));
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventViewerComponent);
    // TestBed.inject(mockApiService)
    component = fixture.componentInstance;
    // spyOn(httpClient, 'get').and.returnValue();
    // spyOn(httpClient, 'get').and.returnValue(of(events));

    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('#getAllEvents should return multiple events (not async)', (done: DoneFn) => {
    console.warn(events)
    component.getAllEvents();

    // expect(component.show_list.length).toBeGreaterThan(0);
    expect(apiService.getAllEvents).toHaveBeenCalled();
    
    // pending();
  });

  it('populateEvents should determine if there are events in the cache and return them', () => {

    component.populateEvents();

    expect(component.show_list.length).toBeGreaterThan(0);
    expect(component.show_list).toEqual(events);

  });

it('populate events should call getAllEvents if there are no events in the cache', () => {
  apiService.events = [];
  component.populateEvents();
  expect(apiService.getAllEvents).toHaveBeenCalled();

});


  it('should have a boolean for whether or not there are upcoming events that returns false if there are events', () => {
    apiService.events = events;

    component.populateEvents();
    expect(component.openMicBoolean).toEqual(false);
  });

  it('should have a boolean for whether or not there are upcoming events that returns true if there are no events', () => {
    component.openMicCheck();
    expect(component.openMicBoolean).toEqual(true);
  });

});
