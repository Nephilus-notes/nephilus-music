import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiServiceService', () => {
  let service: ApiService;
  let mockHttp: HttpClient;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get', 'post']);
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
    // let mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
    // spyOn(mockHttp, 'get');
    // can use Spyon(http, 'get').and.returnValue(Observable.of(events)) to return a mock value
    // or can use spyOn(http, 'get').and.callThrough() to call the actual function

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
    pending();
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
