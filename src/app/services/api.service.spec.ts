import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler,  } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { LiveEvent } from '../models/liveEvent';

describe('ApiServiceService', () => {
  let service: ApiService;
  let mockHttp: HttpClient;
  let events: Array<LiveEvent> 

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get', 'post']);
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
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    }).compileComponents();
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all events in the database', () =>  { 
    // let http = TestBed.inject(HttpClient); // 
    // let mockHttp = jasmine.createSpyObj('HttpClient', ['get']).and.returnValue(Observable.of(events));
    // spyOn(mockHttp, 'get');
    // can use Spyon(http, 'get').and.returnValue(Observable.of(events)) to return a mock value
    // or can use spyOn(http, 'get').and.callThrough() to call the actual function
    // mockHttp.get;
    // let events = service.getAllEvents();
    // return events 
    // expect(mockHttp).toBeTruthy();
    // expect(mockHttp.get).toHaveBeenCalledTimes(1);
    pending();
  });
  it('should cache all events into the events variable', () =>  {
    pending();
  });
  it('should return one event from the database', () =>  {
  let http = TestBed.inject(HttpClient);
  spyOn(http, 'get').and.returnValue(of(events[1]));
  let localEvents = service.getOneEventFromAPI(1);
  expect(localEvents).toBeTruthy();
  expect(http.get).toHaveBeenCalledTimes(1);

    // pending();
  });
  it('should return one event from the cache', () =>  {
    pending();
  });
  it('should sort all events by date', () =>  {
    pending();
  });
  it('should return all setlists in the database', () =>  {
    pending();
  });
  it('should cache all setlists into the setlists variable', () =>  {
    pending();
  });
  it('should return one setlist from the database', () =>  {
    // spyOn(mockHttp, 'get')
    pending();
    
  });
  it('should return one setlist from the cache', () =>  {
    pending();
  });
  it('should return all songs in the database', () =>  {
    pending();
  });
  it('should cache all songs into the songs variable', () =>  {
    pending();
  });
  it('should return one song from the database', () =>  {
    pending();
  });
  it('should return one song from the cache', () =>  {
    pending();
  });
  it('should return all patrons in the database', () =>  {
    pending();
  });
  it('should return one patron from the database', () =>  {
    pending();
  });

  it('should make a new event in the database', () =>  {
    pending();
  });
  it('should make a new setlist in the database', () =>  {
    pending();
  });
  it('should make a new song in the database', () =>  {
    pending();
  });
  it('should make a new patron in the database', () =>  {
    pending();
  });


});
