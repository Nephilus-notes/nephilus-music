import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler,  } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { LiveEvent } from '../models/liveEvent';
import { Setlist } from '../models/setlist';
import { Song } from '../models/song';
import { Patron } from '../models/patron';
import { PatronDTO } from '../models/patronDTO';
import { SongDTO } from '../models/songDTO';

describe('ApiService', () => {
  let service: ApiService;
  let mockHttp: HttpClient;
  let httpClient: HttpClient;
  let httpTestController:HttpTestingController;
  let events: Array<LiveEvent>;
  let setLists: Array<Setlist>;
  let songs: Array<Song>;
  let patrons: Array<Patron>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['mockGet', 'post']);
    events = [
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
    setLists =[
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
    songs = [
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
        known : true,
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
                known : true,

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
        known : true,

      },
    ];
    patrons = [
      {
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
      },
      {
        id: 2,
        first_name: 'Test',
        last_name: 'Admin',
        email: '',
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        one_time_donation: 0,
        recurring_donation: 0,
        times_at_show: 7,
      },
    ];

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

    }).compileComponents();
    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
    // httpClient = TestBed.inject(httpClient);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  
  afterEach(() => {
    httpTestController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tests the HttpClient.get method', () => {
    const testData: LiveEvent = events[1];

    // mockHttp.mockGet().and.returnValue(of(testData));
  });

  it('should return a complete list of events from calling the mockapi using getAllEvents', () =>  { 
    let eventList: Array<LiveEvent> = [];

    spyOn(httpClient, 'get').and.returnValue(of(events));
    let allEvents = service.getAllEvents();
    allEvents.subscribe((data) => {
      eventList = data;
    });

    expect(allEvents).toBeTruthy();
    expect(eventList.length).toBeLessThanOrEqual(3);
    expect(eventList).toEqual(events);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it('should cache all events into the events property', () =>  {
    service.cacheEvents(events);
    expect(service.events).toEqual(events);
  });

  it('should return one event', () =>  {
  spyOn(httpClient, 'get').and.returnValue(of(events[1]));
  let localEvents = service.getOneEventFromAPI(1);
  expect(localEvents).toBeTruthy();
  expect(httpClient.get).toHaveBeenCalledTimes(1);

  });
  it('should return one event from the cache', () =>  {
    /* The event with id 1 is the first event in the events array.
    */
    service.events = events;
    let oneEvent = service.getOneEventFromCache(1);
    expect(oneEvent).toEqual(events[0]);
    
  });
  it('should sort all events by date', () =>  {
    service.sortEventsByDate(events);
    expect(events[0].id).toEqual(1);
    expect(events[1].id).toEqual(2);
    expect(events[2].id).toEqual(3);
  });
  it('should return all setlists in the database', () =>  {
    let setListChecker: Array<Setlist> = [];
    spyOn(httpClient, 'get').and.returnValue(of(setLists));
    let setlists$ = service.getAllSetlists();
    setlists$.subscribe((data) => {
      setListChecker = data;
    });

    expect(setlists$).toBeTruthy();
    expect(setListChecker.length).toBeLessThanOrEqual(2);
    expect(setListChecker).toEqual(setLists);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });
  // it('should cache all setlists into the setlists variable', () =>  {
  //   service.cacheSetlists(setLists);
  //   expect(service.setlists).toEqual(setLists);
  // });
  it('should return one setlist from the database', () =>  {
    let oneSetlist!: Setlist;
    spyOn(httpClient, 'get').and.returnValue(of(setLists[1]));
    let oneSetlist$ = service.getOneSetlist(2);
    expect(oneSetlist$).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    oneSetlist$.subscribe((data) => {
      oneSetlist = data;
    });
    expect(oneSetlist).toEqual(setLists[1]);
    
  });
  // it('should return one setlist from the cache', () =>  {
  //   pending();
  // });
  it('should return all songs in the database', () =>  {
    let songValidator: Array<Song> = [];
    spyOn(httpClient, 'get').and.returnValue(of(songs));
    let songs$ = service.getAllSongs();
    songs$.subscribe((data) => {
      songValidator = data;
    });
    expect(songs$).toBeTruthy();
    expect(songValidator.length).toBeLessThanOrEqual(3);
    expect(songValidator).toEqual(songs);
    expect(httpClient.get).toHaveBeenCalledTimes(1);

  });
  it('should cache all songs into the songs variable', () =>  {
    service.cacheSongs(songs);
    expect(service.songs).toEqual(songs);
  });
  it('should return one song from getOneSong using id property', () =>  {
    let oneSong!: Song;
    spyOn(httpClient, 'get').and.returnValue(of(songs[1]));
    let oneSong$ = service.getOneSong(2);
    expect(oneSong$).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    oneSong$.subscribe((data) => {
      oneSong = data;
    });
    expect(oneSong).toEqual(songs[1]);
  });
  it('should return one song from getOneSong using title property', () =>  {
    let oneSong!: Song;
    spyOn(httpClient, 'get').and.returnValue(of(songs[1]));
    let oneSong$ = service.getSongByTitle('Test Song 2');
    expect(oneSong$).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    oneSong$.subscribe((data) => {
      oneSong = data;
    });
    expect(oneSong).toEqual(songs[1]);
  });
  // it('should return one song from the cache', () =>  {
  //   service.songs = songs;
  //   let oneSong = service.getOneSongFromCache(1);
  //   expect(oneSong).toEqual(songs[0]);
  //   pending();
  // });
  it('should return all patrons in the database', () =>  {
    let patronValidator: Array<Patron> = [];
    spyOn(httpClient, 'get').and.returnValue(of(patrons));
    let patrons$ = service.getAllPatrons();
    patrons$.subscribe((data) => {
      patronValidator = data;
    });
    expect(patrons$).toBeTruthy();
    expect(patronValidator.length).toBeLessThanOrEqual(2);
    expect(patronValidator).toEqual(patrons);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });
  it('should return one patron from the database', () =>  {
    let onePatron!: Patron;
    spyOn(httpClient, 'get').and.returnValue(of(patrons[1]));
    let onePatron$ = service.getOnePatron(2);
    expect(onePatron$).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    onePatron$.subscribe((data) => {
      onePatron = data;
    });
    expect(onePatron).toEqual(patrons[1]);
  });

  // it('should make a new event in the database', () =>  {
  //   let newEvent: LiveEvent = {

  //     title: 'Test Event',
  //     description: 'This is a test event',
  //     start_date: new Date('10-27-2023 06:00:00'),
  //     end_date: new Date('10-27-2023 09:00:00'),
  //     venue_name: 'Cafe Smok N Pi',
  //     venue_address: '12636 MO-21',
  //     venue_city: 'DeSoto',
  //     venue_state: 'MO',
  //     venue_zip_code: '63020',
  //     venue_country: 'USA',
  //     venue_url: 'http://www.cafesmoknpi.com/',
  //     venue_phone: '(636)337-5577',
  //     created_at: new Date(),
  //     updated_at: new Date(),
  //     deleted_at: new Date(),
  //     deleted: false,
  //     event_type: 'Test Type',
  //     short_description: 'This is my second test event',
  //   };
  // });
  // it('should make a new setlist with an http call and get back a more complete setlist object', () =>  {
  //   pending();
  // });
  it('should make a new song using addSong with an http call and get back a more complete Song object', () =>  {
    
    let newSongDTO: SongDTO = {
      title: 'Test Song',
      artist: 'Test Artist',
      album: 'Test Album',
      year: 'Test Year',
      genre: 'Test Genre',
      duration: 180,
      times_requested: 0,
      known: true,
    };
    let newSong: Song = {
      id: 4,
      title: 'Test Song',
      artist: 'Test Artist',
      album: 'Test Album',
      year: 'Test Year',
      genre: 'Test Genre',
      duration: 180,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      times_requested: 0,
      known: true,
    };
    spyOn(httpClient, 'post').and.returnValue(of(newSong));
    let newSong$ = service.addSong(newSongDTO);
    expect(newSong$).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    newSong$.subscribe((data) => {
      expect(data).toEqual(newSong);
    });
  });
  it('should make a new patron with an http call and get back a more complete patron object', () =>  {
  
    let newPatronDTO: PatronDTO = {
      name: 'Test Patron',
      email: '',
      is_admin: false,
      deleted: false,
      one_time_donation: 0,
      recurring_donation: 0,
      times_at_show: 0,
    };
    let newPatron: Patron = {
      id: 3,
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
    };

    spyOn(httpClient, 'post').and.returnValue(of(newPatron));
    let newPatron$ = service.postPatron(newPatronDTO);
    expect(newPatron$).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    newPatron$.subscribe((data) => {
      expect(data).toEqual(newPatron);
    });

    });

  it('should update a song in the database', () =>  {
    let updatedSong: Song = {
      id: 3,
      title: 'Wicked Game',
      artist: 'Chris Isaak',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      times_requested: 10,
      known: true,
    };
    spyOn(httpClient, 'put').and.returnValue(of(updatedSong));
    let updatedSong$ = service.updateSong(updatedSong);
    expect(updatedSong$).toBeTruthy();
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    updatedSong$.subscribe((data) => {
      expect(data).toEqual(updatedSong);
    });
  });
  it('should update a patron in the database', () =>  {
    pending();
  });
  it('should delete a song from the database', () =>  {
    pending();
  });
  it('should delete a patron from the database', () =>  {
    pending();
  });
  it('should check the database for a song by title, then create the song if it does not yet exist', () =>  {
    let newSongDTO: SongDTO = {
      title: 'Test Song',
      artist: 'Test Artist',
      album: 'Test Album',
      year: 'Test Year',
      genre: 'Test Genre',
      duration: 180,
      times_requested: 0,
      known: true,
    };
    let newSong: Song = {
      id: 4,
      title: 'Test Song',
      artist: 'Test Artist',
      album: 'Test Album',
      year: 'Test Year',
      genre: 'Test Genre',
      duration: 180,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      times_requested: 0,
      known: true,
    };
    spyOn(httpClient, 'get').and.returnValue(of(null));
    spyOn(httpClient, 'post').and.returnValue(of(newSong));
    let newSong$ = service.postSong(newSongDTO);

    expect(newSong$).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalledTimes(1); 
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    if (newSong$) {
      newSong$.subscribe((data) => {
      expect(data).toEqual(newSong);
      });
    }
  });

  it('should check the database for a song by title, then update the song if it is found', () =>  {
    pending();
    let songAfterUpdate: Song = {
      id: 3,
      title: 'Wicked Game',
      artist: 'Chris Isaak',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      times_requested: 11,
      known: true,
    };
    let songToUpdate: Song = songs[2];
    spyOn(httpClient, 'get').and.returnValue(of(songToUpdate));
    spyOn(httpClient, 'put').and.returnValue(of(songAfterUpdate));
    let updatedSong$ = service.postSong(songToUpdate);
    expect(updatedSong$).toBeTruthy();
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    if (updatedSong$) {
      updatedSong$.subscribe((data) => {
        expect(data).toEqual(songAfterUpdate);
      });
    }

  });
  // should I make a full cycle of tests for live Song and Patron crud operations? 




});
