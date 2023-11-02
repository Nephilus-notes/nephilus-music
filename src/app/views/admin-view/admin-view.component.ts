import { Component } from '@angular/core';
import { LiveEvent } from 'src/app/models/liveEvent';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  constructor( private apiService: ApiService) {}
  event_list!: LiveEvent[];

  public getAllEvents(): void {
  this.event_list = this.apiService.getAllEvents()
  console.warn(this.event_list)
  }

  ngOnInit(): void {
    this.getAllEvents()
  }
}
