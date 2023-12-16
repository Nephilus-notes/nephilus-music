import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { LiveEvent } from '../models/liveEvent';
import { Setlist } from '../models/setlist';
import { Song } from '../models/song';
import { Patron } from '../models/patron';
import { PatronDTO } from '../models/patronDTO';
import { SongDTO } from '../models/songDTO';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http:HttpClient) {}
  events: Array<LiveEvent> = [];
  songs: Array<Song> = [];

// event functions
  public getAllEvents(): Observable<Array<LiveEvent>> {

   let url = `${environment.BASE_URL}${environment.SHOW_EXT}${environment.URL_SUFFIX}`
   console.log(url + ' is the url')
   const events = this.http.get<Array<LiveEvent>>(url)

   return events
  }

  public cacheEvents(events: Array<LiveEvent>): void {
    this.events = events
  }
  
  public getOneEventFromAPI(id: number): Observable<LiveEvent> {
    let url = `${environment.BASE_URL}${environment.SHOW_EXT}${id}${environment.URL_SUFFIX}`
    console.log(url + ' is the url')
    const event = this.http.get<LiveEvent>(url)

    return event
  }

  public getOneEventFromCache(id: number): LiveEvent {
    for (let event of this.events) {
      if (event.id === id) {
        return event;
      }
    }
    return this.events[0];
  }

  public sortEventsByDate(show_list:Array<LiveEvent>): void {
    show_list.sort((a, b) => {
      return a.start_date.getTime() - b.start_date.getTime();
    });
  }

// setlist functions

  public getAllSetlists(): Setlist[] {
    return [
      {
        id: 1,
        title: 'December Smok N Pi test Setlist',
        description: 'This is a test setlist',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        event_id: 3,
      },
      {
        id: 2,
        title: 'October Smoke N Pi test Setlist',
        description: 'This is a second test setlist',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        event_id: 2,
      },
    ];
  }

  public getOneSetlist(id: number): Setlist {
    switch (id) {
      case 2: {
        return {
          id: 2,
          title: 'October Smoke N Pi test Setlist',
          description: 'This is a second test setlist',
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          event_id: 2,
        };
      }
      default: {
        return {
          id: 1,
          title: 'December Smok N Pi test Setlist',
          description: 'This is a test setlist',
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          event_id: 3,
        };
      }
    }
  }

// song functions

  public getAllSongs(): Observable<Array<Song>> {
    let url = `${environment.BASE_URL}${environment.SONG_EXT}${environment.URL_SUFFIX}`
    const songs = this.http.get<Array<Song>>(url)
    return songs
  }

  public cacheSongs(songs: Array<Song>): void {
    this.songs = songs
  }

  public getOneSong(id: number): Song {

      return{
      id: 1,
      title: 'As Hope and Promise Fade test',
      artist: 'Chris Cornell test',
      album: 'Test Album',
      year: "good question",
      genre: 'Test Genre',
      duration: 180,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      times_requested: 4,
      known : true,
     };

  }

  public postSong(song: SongDTO): void {
    let url = `${environment.BASE_URL}${environment.REQUEST_EXT}`
    // console.log(url + ' is the url')
    console.log(song)
  this.http.post<Song>(url, song).subscribe((response) => {
        console.log(response)
      }
      )
  }

// patron functions

  public getAllPatrons(): Observable<Array<Patron>> {
    let url = `${environment.BASE_URL}${environment.PATRON_EXT}${environment.URL_SUFFIX}`
    console.log(url + ' is the url')
    const patrons = this.http.get<Array<Patron>>(url)

    return patrons
  }

  public getOnePatron(id: number): Patron {
    
      return {
        id: 1,
        first_name: 'Test',
        last_name: 'Patron',
        email: '',
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        one_time_donation: 0,
        recurring_donation: 0,
        times_at_show: 0,
      }
      
  }

  public postPatron(patron: PatronDTO): void {
    let url = `${environment.BASE_URL}${environment.SUBSCRIBE_EXT}`
    // console.log(url + ' is the url')
    console.log(patron)
 this.http.post<Patron>(url, patron).subscribe((response) => {
      console.log(response)
    }
    )  }

  // public getNewPatronId(): number {
  //   let id = 0
  //   this.getAllPatrons().subscribe((patrons) => {
  //     // console.log(patrons.length)
  //     id = patrons.length + 1
  //   })
  //   return id
  // }
}
