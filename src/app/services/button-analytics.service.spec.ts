import { TestBed } from '@angular/core/testing';

import { ButtonAnalyticsService } from './button-analytics.service';
import { buttonAnalytics } from '../models/buttonAnalytics';
import { ButtonInfo } from '../models/buttonInfo';

describe('ButtonAnalyticsService', () => {
  let service: ButtonAnalyticsService;
  let buttonInfo: ButtonInfo;
  let buttonAnalytics: buttonAnalytics;

  beforeEach(() => {
    let testButtonInfo = {
      id: 'testButton',
      type: 'link',
      text: 'My Button',
      url: '/bio',
      classes: 'movingBackgroundLeft button active navLink',
      title: '',
      ariaLabel: 'Performance Dates'
    };
    buttonInfo = testButtonInfo;
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonAnalyticsService);
    buttonAnalytics = service.createButtonAnalyticsObject(buttonInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a buttonAnalytics object', () => {
    let buttonAnalytics = service.createButtonAnalyticsObject(buttonInfo);
    expect(buttonAnalytics).toBeTruthy();
  });

  it('should add a button click to the cache', () => {
    service.addButtonClickToCache(buttonAnalytics);
    expect(service.buttonAnalyticsCache[buttonAnalytics.id]).toBeTruthy();
  });

  it('should increment the clicks property of a buttonAnalytics object', () => {
    service.incrementButtonInfo(buttonAnalytics);
    expect(buttonAnalytics.clicks).toEqual(2);
  });
});
