import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { LiveEvent } from '../models/liveEvent';
import { Setlist } from '../models/setlist';
import { Song } from '../models/song';
import { Patron } from '../models/patron';
import { PatronDTO } from '../models/patronDTO';
import { SongDTO } from '../models/songDTO';
import { EnvironmentService } from './environment.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private environmentService: EnvironmentService) {}
  events: Array<LiveEvent> = [];
  selectedEvent!: LiveEvent;
  songs: Array<Song> = [];

  // event functions
  public getAllEvents(): Observable<Array<LiveEvent>> {
    let url = this.environmentService.allEvents;
    //  console.log(url + ' is the url')
    const events = this.http.get<Array<LiveEvent>>(url);

    return events;
  }

  public cacheEvents(events: Array<LiveEvent>): void {
    this.events = events;
  }

  public getOneEventFromApi(id: number): Observable<LiveEvent> {
    // this.getAllEvents().subscribe((events) => {
    //   this.events = events;
    //   // console.log(this.events)
    //   return of(this.getOneEventFromCache(id));
    // }
    // );
    
    // console.log(this.getOneEventFromCache(id));
    return of(this.getOneEventFromCache(id));

    // let url = this.environmentService.buildOneEventUrl(id);
    // // console.log(url + ' is the url');
    // const event = this.http.get<LiveEvent>(url);

    // return event;
  }

  public getOneEventFromCache(id: number): LiveEvent {
    let eventIndex = 0;
    for (let [index, event] of this.events.entries()) {

      if (+event.id === +id) {
      // console.log(event.id + ' is the event id')
      eventIndex = index;
      }
    }
    return this.events[eventIndex];
  }

  public sortEventsByDate(show_list: Array<LiveEvent>): void {
    show_list.sort((a, b) => {
      return a.start_date.getTime() - b.start_date.getTime();
    });
  }

  // setlist functions

  public getAllSetlists(): Observable<Array<Setlist>> {
    let url = this.environmentService.allSetlistsUrl;
    // console.log(url + ' is the url')
    const setlists = this.http.get<Array<Setlist>>(url);

    return setlists;
  }

  public getOneSetlist(id: number): Observable<Setlist> {
    let url = this.environmentService.buildOneSetlistUrl(id);
    // console.log(url + ' is the url')
    const setlist = this.http.get<Setlist>(url);

    return setlist;
  }

  // song functions

  public getAllSongs(): Observable<Array<Song>> {
    let url = this.environmentService.allSongsUrl;
    const songs = this.http.get<Array<Song>>(url);
    return songs;
  }

  public cacheSongs(songs: Array<Song>): void {
    this.songs = songs;
  }

  public getOneSong(id: number): Observable<Song> {
    let url = this.environmentService.buildOneSongUrl(id);
    const song = this.http.get<Song>(url);
    return song;
  }

  public updateSong(song: Song): Observable<Song> {
    let url = this.environmentService.buildSongUpdateUrl(song.id);
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
    let url = this.environmentService.buildSongByTitleUrl(title);
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
    let url = this.environmentService.buildSongRequestUrl;
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
    let url = this.environmentService.subscribeUrl;
    // console.log(url + ' is the url')
    // console.log(patron);
    let newPatron = this.http.post<Patron>(url, patron);
    // newPatron.subscribe((response) => {
    //   console.log(response);
    // });
    return newPatron;
  }

  public sendAnalyticsBundle(pagesViewed:any, buttonAnalyticsCache:any): void {
    let url = this.environmentService.getLogUrl;
    // console.log(url + ' is the url');
    let bundle = {
      pagesViewed: pagesViewed,
      buttonsClicked: buttonAnalyticsCache,
    };
    console.log(bundle);
    // this.http.post(url, bundle).subscribe((response) => {
      // console.log(response);
    // });
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
