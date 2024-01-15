import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  #env = environment;
  params: any;


  // EVENT FUNCTIONS //
  public get allEvents(): string {
    return `${this.#env.BASE_URL}${this.#env.SHOW_EXT}${this.#env.URL_SUFFIX}`;
  }

 public buildOneEventUrl(id: number): string {
    let routerId = this.router.url.split('/')[2];
    console.log(routerId + ' is the router id')
    return `${this.#env.BASE_URL}${this.#env.SHOW_EXT}${id}${this.#env.URL_SUFFIX}`;
  }
  // SONGS FUNCTIONS //

  public get allSongsUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}${this.#env.URL_SUFFIX}`;
  }

 public buildOneSongUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}${id}${this.#env.URL_SUFFIX}`;
  }
  
  public buildSongUpdateUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}${id}${this.#env.URL_SUFFIX}`;
  }

  public buildSongByTitleUrl(title:string): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}?title=${title}${this.#env.URL_SUFFIX}`;
  }

  public get buildSongRequestUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.REQUEST_EXT}`;
  }

  // SETLIST FUNCTIONS //

  public get allSetlistsUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.SETLIST_EXT}${this.#env.URL_SUFFIX}`;
  }

public buildOneSetlistUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SETLIST_EXT}${id}${this.#env.URL_SUFFIX}`;
  }

  // PATRON FUNCTIONS //

public get subscribeUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.SUBSCRIBE_EXT}`;
  }

  // public buildOnePatronUrl(id:number): string {
  //   return `${this.#env.BASE_URL}${this.#env.PATRON_EXT}${id}${this.#env.URL_SUFFIX}`;
  // }

  // public get allPatrons(): string {
  //   return `${this.#env.BASE_URL}${this.#env.PATRON_EXT}${this.#env.URL_SUFFIX}`;
  // }

  public buildIPGeolocationUrl(ip: string): string {
    return `${this.#env.IP_GEOLOCATION_ENDPOINT}?apiKey=${this.#env.IP_GEOLOCATION_API_KEY}&ip=${ip}`;
  }

  public get getLogUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.LOG_ENDPOINT}`;
  }
  
  constructor(private router: Router) { }
}
