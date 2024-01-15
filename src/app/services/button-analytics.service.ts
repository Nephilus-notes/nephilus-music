import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonInfo } from '../models/buttonInfo';
import { buttonAnalytics } from '../models/buttonAnalytics';

@Injectable({
  providedIn: 'root'
})
export class ButtonAnalyticsService {
  buttonAnalyticsCache: any = {};
  buttonAnalytics!: buttonAnalytics;

  public logButtonClick(buttonInfo: ButtonInfo) {
    let buttonAnalytics;
    if (this.buttonAnalyticsCache[buttonInfo.id] === undefined) {
      buttonAnalytics = this.createButtonAnalyticsObject(buttonInfo);
      this.addButtonClickToCache(buttonAnalytics);
    } 
    else {
      buttonAnalytics = this.buttonAnalyticsCache[buttonInfo.id];
      this.incrementButtonInfo(buttonAnalytics);
    }

    // // console.log(this.router.url);
    // console.log(buttonAnalytics);
    // console.log(this.buttonAnalyticsCache);
    // // this.buttonAnalyticsCache.push(buttonAnalytics);
  }

  public createButtonAnalyticsObject(buttonInfo: ButtonInfo) {
    let buttonAnalytics: buttonAnalytics = {
      id: buttonInfo.id,
      type: buttonInfo.type,
      title: buttonInfo.title,
      ariaLabel: buttonInfo.ariaLabel,
      clicks: 1,
      uniqueClicks: 1,
      // uniqueIpAddresses: [this.getIpAddress()],
      pageClickedFrom: this.router.url,
      pageClickedTo: buttonInfo.url
    }

    return buttonAnalytics;
  }

  public addButtonClickToCache(buttonAnalytics: buttonAnalytics) {
    this.buttonAnalyticsCache[buttonAnalytics.id] = buttonAnalytics;
  }

  public incrementButtonInfo(buttonAnalytics: buttonAnalytics) {
    buttonAnalytics.clicks++;
    // buttonAnalytics.uniqueClicks++;
    // buttonAnalytics.uniqueIpAddresses.push(this.getIpAddress());
  }

  constructor(private router: Router) {
  }
}
