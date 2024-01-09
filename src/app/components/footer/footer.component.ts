import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/routerAnalytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public analyticsService: AnalyticsService) { }

}
