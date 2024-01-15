import { TestBed } from '@angular/core/testing';

import { RouterAnalyticsService } from './routerAnalytics.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AnalyticsService', () => {
  let service: RouterAnalyticsService;
  let event: any;
  let httpClient: HttpClient;
  let httpTestController: HttpClientTestingModule;

  beforeEach(() => {
    event = {
      routerEvent:{
        url: '/bio',
        navigationTrigger: 'imperative',
        id: 15,
        urlAfterRedirects: '/bio',
        state: null
      }
    }
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    // httpClient = TestBed.inject(httpClient);
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RouterAnalyticsService);
    service.geolocation = {city: 'St Louis', state: 'MO', country: 'USA'};
    service.ip = 'localhost';
  });

  it('should be created', () => {
    pending();
    // expect(service).toBeTruthy();
  });

  it('should create an analytics object', () => {
    pending();
    // let analytics = service.createPageAnalyticsObject(event);
    // expect(analytics).toBeTruthy();
  });

  it('should add a page analytics object to the cache', () => {
    pending();
    // service.addPageToCache();
    // expect(service.pagesViewed[service.currentPage.pageUrl]).toBeTruthy();
  });

  it('should increment the views property of a pageAnalytics object', () => {
    pending();
    // service.incrementPageViews();
    // expect(service.currentPage.views).toEqual(2);
  });

  it('should set the currentUrl property', () => {
    pending();
    // service.setCurrentUrl(event);
    // expect(service.currentUrl).toEqual('/bio');
  });

  it('should set the previousUrl property', () => {
    pending();
    // service.cachePreviousPageUrl(event);
    // expect(service.previousUrl).toEqual('/bio');
  });

  it('should set the nextUrl property', () => {
    pending();
    // service.cacheNextPageUrl(event);
    // expect(service.nextUrl).toEqual('/bio');
  });

  it('should set the current page', () => {
    pending();
    // trickier, potentially split into multiple functions
    // service.setCurrentPage();
    // expect(service.currentPage).toBeTruthy();
  });

  it('should get the ip address and location', () => {
    pending();
    // service.getIpAddressAndLocation();
    // expect(service.ip).toEqual('localhost');
    // expect(service.geolocation).toEqual({city: 'St Louis', state: 'MO', country: 'USA'});
  });

  it('should set the ip and location properties', () => {
    pending();
    // service.addLocationAndIpToPage();
    // expect(service.currentPage.ipAddress).toEqual('localhost');
    // expect(service.currentPage.location).toEqual({city: 'St Louis', state: 'MO', country: 'USA'});
  });

});
