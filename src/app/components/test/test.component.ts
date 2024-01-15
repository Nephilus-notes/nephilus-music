import { Component } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';
import { ButtonAnalyticsService } from 'src/app/services/button-analytics.service';
import { RouterAnalyticsService } from 'src/app/services/routerAnalytics.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private buttonAnalyticsService: ButtonAnalyticsService, private routerAnalyticsService: RouterAnalyticsService) { }

  public logAnalytics() {
    console.log(this.buttonAnalyticsService.buttonAnalyticsCache);
    console.log(this.routerAnalyticsService.pagesViewed);
  }

    buttonInfo: ButtonInfo = {
    id: 'testAnalyticsButton',
    type: 'info',
    text: 'Check Analytics',
    url: '',
    classes: 'movingBackgroundLeft button active navLink',
    title: 'Analytics',
    ariaLabel: 'See page and button analytics for this session'
  };
}
