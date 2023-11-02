import { Component, Input } from '@angular/core';
import { LiveEvent } from 'src/app/models/liveEvent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
@Input() event_list!: LiveEvent[];


}
