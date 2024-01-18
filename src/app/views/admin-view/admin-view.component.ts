import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { LiveEvent } from 'src/app/models/liveEvent';
import { Patron } from 'src/app/models/patron';
import { Setlist } from 'src/app/models/setlist';
import { Song } from 'src/app/models/song';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: true,
  imports: [CardComponent, NgFor],
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent {
  constructor(private apiService: ApiService) {}
  show_list!: LiveEvent[];
  song_list!: Song[];
  set_list!: Setlist[];
  patron_list!: Patron[];
  showControl: number = 1;
  songControl: number = 2;
  patronControl: number = 3;
  setListControl: number = 4;

  public populateEvents(): void {
    if (this.apiService.events.length > 0) {
      this.show_list = this.apiService.events;
    } else {
      this.getAllEvents();
    }
  }
  public getAllEvents(): void {
    this.apiService.getAllEvents().subscribe((events) => {
      this.show_list = events;
      // console.log(this.show_list);

      for (let show of this.show_list) {
        show.start_date = new Date(show.start_date);
        show.end_date = new Date(show.end_date);
      }
      this.apiService.sortEventsByDate(this.show_list);
      this.apiService.cacheEvents(this.show_list);
    });
  }

  public populateSongs(): void {
    if (this.apiService.songs.length > 0) {
      this.song_list = this.apiService.songs;
    } else {
      this.getAllSongs();
    }
  }

  public getAllSongs(): void {
    this.apiService.getAllSongs().subscribe((songs) => {
      this.song_list = songs;
      // console.log(this.song_list);
      this.apiService.cacheSongs(this.song_list);
    });
  }


  public getAllSetlists(): void {
    this.apiService.getAllSetlists().subscribe((setlists) => {
      this.set_list = setlists;
      // console.log(this.set_list);
    });
  }

  public getAllPatrons(): void {
    // this.patron_list = this.apiService.getAllPatrons()
  }

  ngOnInit(): void {
    this.populateEvents();
    this.populateSongs();
    this.getAllSetlists();
    this.getAllPatrons();
  }
}
