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
  constructor(private http: HttpClient) {}
  events: Array<LiveEvent> = [
    {
      id: 1,
      title: 'test event at Smok N Pi',
      description: 'This is a test event',
      start_date: new Date('10-27-2023 06:00:00'),
      end_date: new Date('10-27-2023 09:00:00'),
      venue_name: 'Cafe Smok N Pi',
      venue_address: '12636 MO-21',
      venue_city: 'DeSoto',
      venue_state: 'MO',
      venue_zip_code: '63020',
      venue_country: 'USA',
      venue_url: 'http://www.cafesmoknpi.com/',
      venue_phone: '(636)337-5577',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      event_type: 'Test Type',
      short_description: 'This is my second test event',
    },
    {
      id: 3,
      title: 'Smok N Pi',
      description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      start_date: new Date('12-22-2023 18:00:00'),
      end_date: new Date('12-22-2023 21:00:00'),
      venue_name: 'Smok N Pi',
      venue_address: '2636 Hwy 21',
      venue_city: 'DeSoto',
      venue_state: 'Missouri',
      venue_zip_code: '12345',
      venue_country: 'US',
      venue_url: 'http://www.cafesmoknpi.com/',
      venue_phone: '(636) 337-5577',
      created_at: new Date('11-29-2023'),
      updated_at: new Date('11-29-2023'),
      deleted_at: new Date('11-29-2023'),
      deleted: false,
      event_type: 'restaurant',
      short_description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      image_url: '/assets/img/cafe_smok_n_pi.jfif',
    },
    {
      id: 2,
      title: 'Smok N Pi',
      description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      start_date: new Date('12-02-2023 18:00:00'),
      end_date: new Date('12-02-2023 21:00:00'),
      venue_name: 'Smok N Pi',
      venue_address: '2636 Hwy 21',
      venue_city: 'DeSoto',
      venue_state: 'Missouri',
      venue_zip_code: '12345',
      venue_country: 'US',
      venue_url: 'http://www.cafesmoknpi.com/',
      venue_phone: '(636) 337-5577',
      created_at: new Date('11-29-2023'),
      updated_at: new Date('11-29-2023'),
      deleted_at: new Date('11-29-2023'),
      deleted: false,
      event_type: 'restaurant',
      short_description:
        'Me and my guitar playing music from all times, Cash to Cornell, Presley to Petty, and everything in between.',
      image_url: '/assets/img/cafe_smok_n_pi.jfif',
    },
  ];
  songs: Array<Song> = [];

  // event functions
  public getAllEvents(): Observable<Array<LiveEvent>> {
    let url = `${environment.BASE_URL}${environment.SHOW_EXT}${environment.URL_SUFFIX}`;
    //  console.log(url + ' is the url')
    const events = this.http.get<Array<LiveEvent>>(url);

    return events;
  }

  public cacheEvents(events: Array<LiveEvent>): void {
    this.events = events;
  }

  public getOneEventFromAPI(id: number): Observable<LiveEvent> {
    let url = `${environment.BASE_URL}${environment.SHOW_EXT}${id}${environment.URL_SUFFIX}`;
    // console.log(url + ' is the url');
    const event = this.http.get<LiveEvent>(url);

    return event;
  }

  public getOneEventFromCache(id: number): LiveEvent {
    for (let event of this.events) {
      if (event.id === id) {
        return event;
      }
    }
    return this.events[0];
  }

  public sortEventsByDate(show_list: Array<LiveEvent>): void {
    show_list.sort((a, b) => {
      return a.start_date.getTime() - b.start_date.getTime();
    });
  }

  // setlist functions

  public getAllSetlists(): Observable<Array<Setlist>> {
    let url = `${environment.BASE_URL}${environment.SETLIST_EXT}${environment.URL_SUFFIX}`;
    // console.log(url + ' is the url')
    const setlists = this.http.get<Array<Setlist>>(url);

    return setlists;
  }

  public getOneSetlist(id: number): Observable<Setlist> {
    let url = `${environment.BASE_URL}${environment.SETLIST_EXT}${id}${environment.URL_SUFFIX}`;
    // console.log(url + ' is the url')
    const setlist = this.http.get<Setlist>(url);

    return setlist;
  }

  // song functions

  public getAllSongs(): Observable<Array<Song>> {
    let url = `${environment.BASE_URL}${environment.SONG_EXT}${environment.URL_SUFFIX}`;
    const songs = this.http.get<Array<Song>>(url);
    return songs;
  }

  public cacheSongs(songs: Array<Song>): void {
    this.songs = songs;
  }

  public getOneSong(id: number): Observable<Song> {
    let url = `${environment.BASE_URL}${environment.SONG_EXT}${id}${environment.URL_SUFFIX}`;
    const song = this.http.get<Song>(url);
    return song;
  }

  public updateSong(song: Song): Observable<Song> {
    let url = `${environment.BASE_URL}${environment.SONG_EXT}${song.id}${environment.URL_SUFFIX}`;
    let updatedSong = this.http.put<Song>(url, song);
    updatedSong.subscribe((response) => {
      // console.log(response);
    });
    return updatedSong;
    
  }

  public getSongByTitle(title: string): Observable<Song>{
    // check database to see if songs exists using it's title
    // if it does, return the song
    // if not, return null
    let url = `${environment.BASE_URL}${environment.SONG_EXT}${title}${environment.URL_SUFFIX}`;
    const song = this.http.get<Song>(url);
    return song;
  }

  public postSong(song: SongDTO): Observable<Song>|null {
    // check if the song is in the database already
    // if it is, increment the times requested
    // if not, add it to the database
    //
    let flag = true;
   let potentialSong = this.getSongByTitle(song.title);
   potentialSong.subscribe((response) => {
      if (response) {
        response.times_requested++;
        flag = false;
        return this.updateSong(response);
      } else {
        return null;
      }
    });
    if (flag) {
      return this.addSong(song);
    } else {
      return null;
    }
  }

  public addSong(song: SongDTO): Observable<Song> {
    let url = `${environment.BASE_URL}${environment.SONG_EXT}`;
    // console.log(url + ' is the url')
    // console.log(song);
    let newSong = this.http.post<Song>(url, song);
    return newSong;
  }

  // patron functions

  public getAllPatrons(): Observable<Array<Patron>> {
    let url = `${environment.BASE_URL}${environment.PATRON_EXT}${environment.URL_SUFFIX}`;
    // console.log(url + ' is the url');
    const patrons = this.http.get<Array<Patron>>(url);

    return patrons;
  }

  public getOnePatron(id: number): Observable<Patron> {
    let url = `${environment.BASE_URL}${environment.PATRON_EXT}${id}${environment.URL_SUFFIX}`;
    const patron = this.http.get<Patron>(url);

    return patron;
  }

  public postPatron(patron: PatronDTO): Observable<any> {
    // let newPatron!: Patron;
    let url = `${environment.BASE_URL}${environment.SUBSCRIBE_EXT}`;
    // console.log(url + ' is the url')
    // console.log(patron);
    let newPatron = this.http.post<Patron>(url, patron);
    // newPatron.subscribe((response) => {
    //   console.log(response);
    // });
    return newPatron;
  }

  // public getNewPatronId(): number {
  //   let id = 0
  //   this.getAllPatrons().subscribe((patrons) => {
  //     // console.log(patrons.length)
  //     id = patrons.length + 1
  //   })
  //   return id
  // }
}
