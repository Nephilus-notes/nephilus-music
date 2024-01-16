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

    httpClient = TestBed.inject(HttpClient);
    router=TestBed.inject(ActivatedRoute);
    route = TestBed.inject(ActivatedRoute);
    apiService = TestBed.inject(ApiService);
    // spyOn(apiService, 'getOneEventFromAPI').and.returnValue(of({}));
    
    fixture = TestBed.createComponent(SingleEventComponent);
    component = fixture.componentInstance;
    // spyOn(httpClient, 'get').and.returnValue(of({show}));
    // console.warn('trying shit' + show)
    component.show = show;
    spyOn(apiService, 'getOneEventFromApi').and.returnValue(of(show));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // at least two tests are possible here
  it('should populate the html with populateEvent by either calling the cached event with the same id or making an api call'), () => {
    pending();
  }
});
