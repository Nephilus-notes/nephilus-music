import { TestBed } from '@angular/core/testing';

import { TrackingInterceptor } from './tracking.interceptor';

describe('TrackingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TrackingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TrackingInterceptor = TestBed.inject(TrackingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
