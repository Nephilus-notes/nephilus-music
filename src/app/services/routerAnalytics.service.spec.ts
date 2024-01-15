import { TestBed } from '@angular/core/testing';

import { RouterAnalyticsService } from './routerAnalytics.service';

describe('AnalyticsService', () => {
  let service: RouterAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
