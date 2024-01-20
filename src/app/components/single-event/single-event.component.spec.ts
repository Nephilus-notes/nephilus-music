import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEventComponent } from './single-event.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { LiveEvent } from 'src/app/models/liveEvent';
import { ParamMap } from '@angular/router';

describe('SingleEventComponent', () => {
  let component: SingleEventComponent;
  let fixture: ComponentFixture<SingleEventComponent>;
  let httpClient: HttpClient;
  let apiService: ApiService;
  let router: ActivatedRoute;
  let route: ActivatedRoute;
  let show: LiveEvent;
  let show2: LiveEvent;
  let oneEventSpy: any;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [SingleEventComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: 
      [ {
        provide: HttpClientTestingModule, useValue: apiService
      },
      {
        provide: ActivatedRoute, 
        useValue: {
          snapshot: {
            params: {id: 1}
          }
        }
      }]
    });

    show = {
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
    }

    show2 = {
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
      venue_phone: '6363375577',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      event_type: 'Test Type',
      short_description: 'This is my second test event',
    }

    httpClient = TestBed.inject(HttpClient);
    router=TestBed.inject(ActivatedRoute);
    route = TestBed.inject(ActivatedRoute);
    apiService = TestBed.inject(ApiService);
    // spyOn(apiService, 'getOneEventFromAPI').and.returnValue(of({}));
    
    fixture = TestBed.createComponent(SingleEventComponent);
    component = fixture.componentInstance;
    // spyOn(httpClient, 'get').and.returnValue(of({show}));
    // console.warn('trying shit' + show)
    // component.show = show;
    oneEventSpy = spyOn(apiService, 'getOneEventFromApi').and.returnValue(of(show));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // at least two tests are possible here
  it('should populate the html with populateEvent by making an api call', () => {

    // component.populateEvents();

    expect(apiService.getOneEventFromApi).toHaveBeenCalledTimes(1)
    expect(component.show).toEqual(show)
  });

  it('should get another event from the api if the id is different to the event that is already displayed', () => {

    // here we are show 1
    expect(component.show).toEqual(show);
    expect(apiService.getOneEventFromApi).toHaveBeenCalledTimes(1);


    // Resetting spy and setting cache 
    oneEventSpy.calls.reset();
    apiService.events = [show2];
    
    component.id = '' + show2.id;
    // console.warn(component.id)
    component.populateEvents();
    expect(component.show).toEqual(show2);
    
    // setting component id, emptying cache can calling populateEvents
    component.id = '' + show.id;
    apiService.events = [];
    component.populateEvents();
    
    expect(apiService.getOneEventFromApi).toHaveBeenCalledTimes(1)
    expect(component.show).toEqual(show);


  });

  it('should get another event from the cache if the id is different to the event that is already displayed', () => {
    apiService.events = [show2]

    component.id = '' + show2.id
    // console.warn(component.id)

    expect(component.show).toEqual(show)

    component.populateEvents()

    expect(component.show).toEqual(show2)
  });



  it('should populate events by chossing an event from the api cache', () => {
    // component.populateEvents();    
    apiService.events = [show, show2]

    component

    // init of componenet already calls populateEvents, so we need to reset the spy
    oneEventSpy.calls.reset()
    expect(apiService.getOneEventFromApi).toHaveBeenCalledTimes(0)
    expect(component.show).toEqual(show)
  });
});


