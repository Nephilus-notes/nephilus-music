import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiveEvent } from 'src/app/models/liveEvent';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent {
  id!: number;
  live_event!: LiveEvent;
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
    'December'
  ];

  weeks: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
    constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
    public getEvent(): void {
      this.live_event = this.apiService.getOneEvent(this.id)
    }
  
    ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      if (id) {
        
        this.id = +id;
      }
      this.getEvent()
    }
}
