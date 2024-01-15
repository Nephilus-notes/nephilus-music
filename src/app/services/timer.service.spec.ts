import { TestBed } from '@angular/core/testing';

import { TimerService } from './timer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TimerService', () => {
  let service: TimerService;
  let httpClient: HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
