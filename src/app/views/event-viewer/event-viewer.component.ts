import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { LiveEvent } from 'src/app/models/liveEvent';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.css']
})
export class EventViewerComponent {

  constructor( private apiService: ApiService) {}

  show_list: LiveEvent[] = [];
  showControl: number = 1;

  
  public getAllEvents(): void {

    let full_list = [...this.apiService.getAllEvents()]
    for (let show of full_list) {
      let today = new Date()
      console.log(show.start_date, today)
      if (show.start_date > today) {
        this.show_list.push(show)
      }
      else {
        console.log('show has not happened yet')
      }
    }
    }



    ngOnInit(): void {
      this.getAllEvents()
    }
}
