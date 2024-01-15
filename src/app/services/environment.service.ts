import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  #env = environment;

  // EVENT FUNCTIONS //
  public get allEvents(): string {
    return `${this.#env.BASE_URL}${this.#env.SHOW_EXT}${this.#env.URL_SUFFIX}`;
  }

 public buildOneEventUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SHOW_EXT}${id}${this.#env.URL_SUFFIX}`;
  }
  // SONGS FUNCTIONS //

  public get allSongs(): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}${this.#env.URL_SUFFIX}`;
  }

 public buildOneSongUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}${id}${this.#env.URL_SUFFIX}`;
  }
  
  public buildSongUpdateUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SONG_EXT}${id}${this.#env.URL_SUFFIX}`;
  }

  public buildSongRequestUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.REQUEST_EXT}`;
  }

  // SETLIST FUNCTIONS //

  public get allSetlists(): string {
    return `${this.#env.BASE_URL}${this.#env.SETLIST_EXT}${this.#env.URL_SUFFIX}`;
  }

public buildOneSetlistUrl(id:number): string {
    return `${this.#env.BASE_URL}${this.#env.SETLIST_EXT}${id}${this.#env.URL_SUFFIX}`;
  }

  // PATRON FUNCTIONS //

public buildSubscribeUrl(): string {
    return `${this.#env.BASE_URL}${this.#env.SUBSCRIBE_EXT}`;
  }

  // public buildOnePatronUrl(id:number): string {
  //   return `${this.#env.BASE_URL}${this.#env.PATRON_EXT}${id}${this.#env.URL_SUFFIX}`;
  // }

  // public get allPatrons(): string {
  //   return `${this.#env.BASE_URL}${this.#env.PATRON_EXT}${this.#env.URL_SUFFIX}`;
  // }
  
  constructor() { }
}
