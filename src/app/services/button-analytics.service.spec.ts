import { TestBed } from '@angular/core/testing';

import { ButtonAnalyticsService } from './button-analytics.service';

describe('ButtonAnalyticsService', () => {
  let service: ButtonAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
