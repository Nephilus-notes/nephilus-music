import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  constructor(private http: HttpClient) { }
  userIp!:string;
  userLocation!:string;

  public getIp() {
    let ip = document.location.hostname

    console.log(ip)
    this.userIp = ip;

    // this.http.get('https://api.ipify.org/?format=json')
  }

  public getLocation() {

    
  }

}
