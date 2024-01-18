import { Component } from '@angular/core';
import { HeroImageComponent } from 'src/app/components/hero-image/hero-image.component';
import { RouterAnalyticsService } from 'src/app/services/routerAnalytics.service';

@Component({
  standalone: true,
  imports: [HeroImageComponent],
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  // constructor(private routerAnalyticsService:RouterAnalyticsService) {}
  // ngOnInit(): void {
  //   // this.logger.logLocation();
  //   // this.routerAnalyticsService.setCurrentPage();
  //   this.routerAnalyticsService.sendFirstLog();
  // }
title= "Charles McCall - Dev and Creative"
musicUrlList: Array<string> = ["https://drive.google.com/file/d/1wD7Beul2z8LMgrgPnG33Ik0kuIuNKF1A/preview", "https://drive.google.com/file/d/1U9GbAlxaBik5ZilaQAfme1ARyUfLmU5e/preview"]
musicNameList: Array<string> = ["Everything But Desire", "Trouble You Can Borrow"] 
}
