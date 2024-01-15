import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';
import { Logger } from '../log/logger';

describe('LogService', () => {
  let service: LogService;
  let logger: Logger;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      // providers: [Logger],

    }).compileComponents();
    service = TestBed.inject(LogService);
  });

  it('should be created', () => {
    pending();
    // expect(service).toBeTruthy();
  });
});
