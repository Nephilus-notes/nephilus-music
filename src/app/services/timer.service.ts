import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  logon = new Date();
  cadence = 10000;

  sendFirstLog(callback: Function, cadence: number = this.cadence): void {
    setTimeout(() => {
      callback();
      this.logCadence(callback);
    }, cadence/2);
  }

  logCadence(callback: Function, cadence:number = this.cadence): void {
    setTimeout(() => {
      callback();
      this.logCadence(callback);
    }, cadence);
  }

  constructor(public apiService: ApiService) {}
}
