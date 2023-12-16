import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { LiveEvent } from '../models/liveEvent';
import { Setlist } from '../models/setlist';
import { Song } from '../models/song';
import { Patron } from '../models/patron';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http:HttpClient) {}
  events: Array<LiveEvent> = [];

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

  public getAllSongs(): Song[] {
    return [
      {
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
      },
      {
        id: 2,
        title: 'Test Song 2',
        artist: 'Test Artist 2',
        album: 'Test Album 2',
        genre: 'Test Genre 2',
        duration: 180,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        times_requested: 0,
      },
      {
        id: 3,
        title: 'Wicked Game',
        artist: 'Chris Isaak',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        times_requested: 10,
      },
    ];
  }

  public getOneSong(id: number): Song {
    switch (id) {
      case 1: 
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
      times_requested: 4 };

      case 2:
        return {
          id: 2,
          title: 'Test Song 2',
          artist: 'Test Artist 2',
          album: 'Test Album 2',
          genre: 'Test Genre 2',
          duration: 180,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          times_requested: 0,
        };
      case 3:
        return  {
          id: 3,
          title: 'Wicked Game',
          artist: 'Chris Isaak',
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          times_requested: 10,
        }

      default: 
      return  {
        id: 3,
        title: 'Wicked Game',
        artist: 'Chris Isaak',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        times_requested: 10,
      }
    }
  }

// patron functions

  public getAllPatrons(): Observable<Array<Patron>> {
    let url = `${environment.BASE_URL}${environment.PATRON_EXT}${environment.URL_SUFFIX}`
    console.log(url + ' is the url')
    const patrons = this.http.get<Array<Patron>>(url)

    return patrons
  }

  public getOnePatron(id: number): Patron {
  switch (id) {
    
    case 1:
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
        one_time_donations: 0,
        recurring_donations: 0,
        events_attended: 0,
      }
      case 2:
        return {
          id: 2,
          first_name: 'Test',
          last_name: 'Admin',
          email: '',
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          one_time_donations: 0,
          recurring_donations: 0,
          events_attended: 0,
        }
        default : {
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
            one_time_donations: 0,
            recurring_donations: 0,
            events_attended: 0,
          }
      }
      }
  }

  public postPatron(patron: Patron): void {
    let url = `${environment.BASE_URL}${environment.SUBSCRIBE_EXT}`
    console.log(url + ' is the url')
    console.log(patron)
    this.http.post<Patron>(url, patron)
  }

  public getNewPatronId(): number {
    let allPatrons!: Array<Patron>;
    this.getAllPatrons().subscribe((patrons) => {
      allPatrons = patrons
    })

    let id = 0
    for (let patron of allPatrons) {
      if (patron.id > id) {
        id = patron.id
      }
    }
    return id + 1
  }
}
