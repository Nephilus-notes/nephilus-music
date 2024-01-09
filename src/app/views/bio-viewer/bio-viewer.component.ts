import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-bio-viewer',
  templateUrl: './bio-viewer.component.html',
  styleUrls: ['./bio-viewer.component.css']
})
export class BioViewerComponent {
  
    constructor(private analyticsService:AnalyticsService) { }

    // ngOnInit(): void {
    //   this.analyticsService.setCurrentPage();
    // }
}
