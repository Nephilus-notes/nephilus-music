import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiveEvent } from 'src/app/models/liveEvent';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [DatePipe, NgIf],
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css'],
  // providers: [DatePipe],
})
export class SingleEventComponent {
  @Input() id = '';
  show!: LiveEvent;
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  weeks: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private datePipe:DatePipe) {}

  public populateEvents(): void {
    if (this.apiService.events.length > 0) {
      this.show = this.apiService.getOneEventFromCache(+this.id);
      // console.log('getting events from cache');
    }
    if (!this.show ?? this.show.id !== +this.id) {
    // if (this.show.id !== this.id) {
      this.apiService.getOneEventFromApi(+this.id).subscribe((event) => {
        console.log(this.id)
        this.show = event;
        console.log(this.show)
      });
    }
  }

  // public getEvent(): void {
  //   this.show = this.apiService.getOneEvent(this.id)
  // }

  ngOnInit(): void {
    // let id = this.route.snapshot.params['id'];
    // if (id) {
    //   // plus sign converts string to number
    //   this.id = +id;
    // }
    // console.log(this.id)
    this.populateEvents();
  }
}
