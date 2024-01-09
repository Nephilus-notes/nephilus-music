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
  openMicBoolean: Boolean = false;

  public populateEvents(): void {
    /**
     * if the events array is empty, get all events from the API
     * otherwise, use the cached events
     * 
     * this is to prevent the API from being called every time the user navigates to the events page
     */
    if (this.apiService.events.length > 0) {
      this.show_list = this.apiService.events;
    } else {
      this.getAllEvents();
    }
   
  }

  public getAllEvents(): void {
    /**
     *  
     * subscribe to the API service to get all events
     * 
     * convert the start_date and end_date strings to Date objects
     * 
     * cache the events
     * 
     * if there are no upcoming events, display the open mic message
     */
    // console.warn('getting all events');
    this.apiService.getAllEvents().subscribe((events) => {
      this.show_list = events;
      // console.log(this.show_list);

      for (let show of this.show_list) {
        show.start_date = new Date(show.start_date);
        show.end_date = new Date(show.end_date);
      }
      this.apiService.cacheEvents(this.show_list);

      this.openMicCheck();
    });
  }

  openMicCheck(): void {
    /**
     * if there are no upcoming events, display the open mic message
     */
    if (this.upcomingPipe.transform(this.show_list).length > 0) {
      this.openMicBoolean = false;
    }
    else if (this.upcomingPipe.transform(this.show_list).length === 0) {
      this.openMicBoolean = true;
    }
  }

  ngOnInit(): void {
    this.populateEvents();
  }
}
