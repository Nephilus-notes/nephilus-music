import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ButtonAnalyticsService {

  public logButtonClick() {
    console.log(this.router.url);
  }

  constructor(private router: Router) {
  }
}
