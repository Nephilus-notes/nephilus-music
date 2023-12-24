import { KnownPipe } from './known.pipe';
import { Song } from '../models/song';
// import { pipe } from 'rxjs';
import { PipeTransform, Pipe } from '@angular/core';

describe('KnownPipe', () => {
  let songs: Array<Song>;

  beforeEach(() => {
    songs = [
      {
        id: 1,
        title: 'Song 1',
        artist: 'Artist 1',
        known: true,
        times_requested: 1,
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: 'Song 2',
        artist: 'Artist 2',
        known: false,
        times_requested: 1,
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        title: 'Song 3',
        artist: 'Artist 3',
        known: true,
        times_requested: 1,
        deleted: false,
        created_at: new Date(),
        updated_at: new Date()
        
      }
    ];
  });

  it('create an instance', () => {
    const pipe = new KnownPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return known songs', () => {
    const pipe = new KnownPipe();
    expect(pipe.transform(songs, true)).toEqual([songs[0], songs[2]]);
  });

  it('should return unknown songs', () => {
    const pipe = new KnownPipe();
    expect(pipe.transform(songs, false)).toEqual([songs[1]]);
  });

  
});
