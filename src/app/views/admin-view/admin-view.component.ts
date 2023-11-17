import { Component } from '@angular/core';
import { LiveEvent } from 'src/app/models/liveEvent';
import { Patron } from 'src/app/models/patron';
import { Setlist } from 'src/app/models/setlist';
import { Song } from 'src/app/models/song';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  constructor( private apiService: ApiService) {}
  show_list!: LiveEvent[];
  song_list!: Song[];
  set_list!: Setlist[];
  patron_list!: Patron[];
  showControl: number = 1;
  songControl: number = 2;
  patronControl: number = 3;
  setListControl: number = 4;

  public getAllEvents(): void {
  this.show_list = this.apiService.getAllEvents()
  // console.warn(this.event_list)
  }

  public getAllSongs(): void {
    this.song_list = this.apiService.getAllSongs()
  }

  public getAllSetlists(): void {
    this.set_list = this.apiService.getAllSetlists()
  }

  public getAllPatrons(): void {
    this.patron_list = this.apiService.getAllPatrons()
  }


  ngOnInit(): void {
    this.getAllEvents()
    this.getAllSongs()
    this.getAllSetlists()
    this.getAllPatrons()
  }
}
