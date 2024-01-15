import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonInfo } from '../models/buttonInfo';

@Injectable({
  providedIn: 'root'
})
export class ButtonAnalyticsService {

  public logButtonClick(buttonInfo: ButtonInfo) {
    
    console.log(this.router.url);
  }

  constructor(private router: Router) {
  }
}
