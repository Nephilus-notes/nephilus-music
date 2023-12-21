import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../models/song';

@Pipe({
  name: 'known'
})
export class KnownPipe implements PipeTransform {

  transform(songs: Array<Song>, args: boolean): Array<Song> {
    if (songs.length > 0) {
      let filteringSongs: Array<Song> = [];
      for (let song of songs) {
        if (song.known === args) {
          filteringSongs.push(song);
        }
      }
      songs = filteringSongs;
      return songs;
    }
    return songs;
    }

}
