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

  show_list!: LiveEvent[]
  showControl: number = 1;

  
  public getAllEvents(): void {

    let full_list = [...this.apiService.getAllEvents()]
    for (let show of full_list) {
      if (show.start_date < new Date) {
        full_list.splice(full_list.indexOf(show), 1)
      }
    }

    this.show_list = full_list
    // console.warn(this.show_list)
    }



    ngOnInit(): void {
      this.getAllEvents()
    }
}
