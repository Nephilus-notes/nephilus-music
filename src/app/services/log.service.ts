import { Injectable } from '@angular/core';
import { LogFields } from '../log/log-data';
import { Logger } from '../log/logger';
import { environment } from '../../environments/environment';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // private logger: Logger;

  // constructor(private logger: Logger) { }

  public initialize() {
    // this.logger= new Logger(environment.title, environment.LOG_ENDPOINT);
  }
}
