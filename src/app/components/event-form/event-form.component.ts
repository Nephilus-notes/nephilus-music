import { Component } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  constructor(private http:http)

  public getLocation() {
    let ip = document.location.hostname

    
  }

}
