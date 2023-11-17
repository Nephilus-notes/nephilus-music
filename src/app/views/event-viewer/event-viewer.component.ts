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
  public getAllEvents(): void {
    this.show_list = this.apiService.getAllEvents()
    console.warn(this.show_list)
    }



    ngOnInit(): void {
      this.getAllEvents()
    }
}
