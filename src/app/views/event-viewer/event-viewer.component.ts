import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ApiService } from 'src/app/services/api.service';
import { LiveEvent } from 'src/app/models/liveEvent';
import { SortByDatePipe } from 'src/app/pipes/sort-by-date.pipe';
import { UpcomingPipe } from 'src/app/pipes/upcoming.pipe';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.css'],
  providers: [DatePipe, SortByDatePipe, UpcomingPipe],
})
export class EventViewerComponent {
  constructor(private apiService: ApiService, private datePipe: DatePipe, private sortByDatePipe: SortByDatePipe, private upcomingPipe: UpcomingPipe) {}

  show_list: Array<LiveEvent> = [];
  showControl: number = 1;

  public populateEvents(): void {
    if (this.apiService.events.length > 0) {
      this.show_list = this.apiService.events;
      // console.log('getting events from cache');
    } else {
      // console.log('getting events from api');
      this.getAllEvents();
    }

  }

  public getAllEvents(): void {
    // console.warn('getting all events');
    this.apiService.getAllEvents().subscribe((events) => {
      this.show_list = events;
      // console.log(this.show_list);

      for (let show of this.show_list) {
        show.start_date = new Date(show.start_date);
        show.end_date = new Date(show.end_date);
      }
      this.apiService.cacheEvents(this.show_list);

    });
  }



  ngOnInit(): void {
    this.populateEvents();
  }
}
