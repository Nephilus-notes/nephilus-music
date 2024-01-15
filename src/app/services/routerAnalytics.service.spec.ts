import { TestBed } from '@angular/core/testing';

import { RouterAnalyticsService } from './routerAnalytics.service';

describe('AnalyticsService', () => {
  let service: RouterAnalyticsService;
  let event: any;

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
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterAnalyticsService);
    service.geolocation = {city: 'St Louis', state: 'MO', country: 'USA'};
    service.ip = 'localhost';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an analytics object', () => {
    let analytics = service.createPageAnalyticsObject(event);
    expect(analytics).toBeTruthy();
  });

  it('should add a page analytics object to the cache', () => {
    service.addPageToCache();
    expect(service.pagesViewed[service.currentPage.pageUrl]).toBeTruthy();
  });

  it('should increment the views property of a pageAnalytics object', () => {
    pending();
    // service.incrementPageViews();
    // expect(service.currentPage.views).toEqual(2);
  });

  it('should set the currentUrl property', () => {
    service.setCurrentUrl(event);
    expect(service.currentUrl).toEqual('/bio');
  });

  it('should set the previousUrl property', () => {
    service.cachePreviousPageUrl(event);
    expect(service.previousUrl).toEqual('/bio');
  });

  it('should set the nextUrl property', () => {
    pending();
    // service.cacheNextPageUrl(event);
    // expect(service.nextUrl).toEqual('/bio');
  });

  it('should set the current page', () => {
    pending();
    // trickier, potentially split into multiple functions
    service.setCurrentPage();
    expect(service.currentPage).toBeTruthy();
  });

  it('should get the ip address and location', () => {
    pending();
    // service.getIpAddressAndLocation();
    expect(service.ip).toEqual('localhost');
    expect(service.geolocation).toEqual({city: 'St Louis', state: 'MO', country: 'USA'});
  });

  it('should set the ip and location properties', () => {

    service.addLocationAndIpToPage();
    expect(service.currentPage.ipAddress).toEqual('localhost');
    expect(service.currentPage.location).toEqual({city: 'St Louis', state: 'MO', country: 'USA'});
  });

});
