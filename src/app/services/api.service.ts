import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LiveEvent } from '../models/liveEvent';
import { Setlist } from '../models/setlist';
import { Song } from '../models/song';
import { Patron } from '../models/patron';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  events: LiveEvent[] = [
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
        id: 4,
        title: 'Fiddler on the Roof',
        description:
          'Set in the close-knit village of Anatevka, Fiddler on the Roof is a heartfelt story of family, faith, and the courage to change. As Tevye struggles to uphold tradition while his daughters follow their hearts, the musical blends warmth, humor, and profound humanity. Featuring iconic songs like “Tradition,” “If I Were a Rich Man,” and “Sunrise, Sunset,” this beloved classic remains as moving and relevant as ever.',
        start_date: new Date('7-10-2026 20:00:00'),
        end_date: new Date('7-10-2026 23:00:00'),
        venue_name: 'Union Avenue Opera',
        venue_address: '733 N. Union Blvd',
        venue_city: 'St. Louis',
        venue_state: 'Missouri',
        venue_zip_code: '63108',
        venue_country: 'US',
        venue_url: 'https://unionavenueopera.org/fiddler-on-the-roof/',
        venue_phone: '(314)361-2881',
        created_at: new Date('7-7-2026'),
        updated_at: new Date('7-7-2026'),
        deleted_at: new Date('7-7-2026'),
        deleted: false,
        event_type: 'restaurant',
        short_description:
          "Performing in Union Avenue Opera's performance of Fiddler on the Roof as an ensemble member, featured in dance, song, and character.",
        image_url: '/assets/img/UAO Logo.png',
      },
      {
        id: 5,
        title: 'Fiddler on the Roof',
        description:
          'Set in the close-knit village of Anatevka, Fiddler on the Roof is a heartfelt story of family, faith, and the courage to change. As Tevye struggles to uphold tradition while his daughters follow their hearts, the musical blends warmth, humor, and profound humanity. Featuring iconic songs like “Tradition,” “If I Were a Rich Man,” and “Sunrise, Sunset,” this beloved classic remains as moving and relevant as ever.',
        start_date: new Date('7-11-2026 18:00:00'),
        end_date: new Date('7-11-2026 21:00:00'),
        venue_name: 'Union Avenue Opera',
        venue_address: '733 N. Union Blvd',
        venue_city: 'St. Louis',
        venue_state: 'Missouri',
        venue_zip_code: '63108',
        venue_country: 'US',
        venue_url: 'https://unionavenueopera.org/fiddler-on-the-roof/',
        venue_phone: '(314)361-2881',
        created_at: new Date('7-7-2026'),
        updated_at: new Date('7-7-2026'),
        deleted_at: new Date('7-7-2026'),
        deleted: false,
        event_type: 'restaurant',
        short_description:
          "Performing in Union Avenue Opera's performance of Fiddler on the Roof as an ensemble member, featured in dance, song, and character.",
         image_url: '/assets/img/UAO Logo.png',
      },
      {
        id: 6,
        title: 'Nephilus Dreams',
        description:
          "A free performance of my accoustic project, Nephilus Dreams, featuring songs I wrote, composed, and now arranged to play with my parents, Anna Lackschewitz (viola), and Alvin McCall (cello). In addition to songs I have performed before like Will o' Wisp, Trouble You Can Borrow, Armor, and Carry the Torch, and select covers we will be debuting songs from the Demonblade song cycle. Demonblade tells the story of tragedy, great deeds, and the fall of heroes in a more bardic tradition.",
        start_date: new Date('7-13-2026 19:00:00'),
        end_date: new Date('7-13-2026 21:00:00'),
        venue_name: 'Focal Point',
        venue_address: '2720 Sutton Blvd',
        venue_city: 'Maplewood',
        venue_state: 'Missouri',
        venue_zip_code: '63143',
        venue_country: 'US',
        venue_url: 'https://thefocalpoint.org',
        venue_phone: '(314)560-2778',
        created_at: new Date('7-7-2026'),
        updated_at: new Date('7-7-2026'),
        deleted_at: new Date('7-7-2026'),
        deleted: false,
        event_type: 'Concert',
        short_description:
          'A free performance of my accoustic project, Nephilus Dreams, featuring songs I wrote, composed, and now arranged to play with my parents, Anna Lackschewitz (viola), and Alvin McCall (cello).',
        image_url: '/assets/img/Symbol.png',
      },
      {
        id: 7,
        title: 'Samson Et Dalila',
        description:
          'Lush, seductive, and emotionally charged, Samson et Dalila explores love, betrayal, and the cost of vulnerability. Saint-Saëns’ sweeping score amplifies the psychological tension between the heroic Samson and the enigmatic Dalila. Anchored by the hauntingly beautiful aria “Mon cœur s’ouvre à ta voix” and thrilling dramatic choruses, this grand opera delivers passion, spectacle, and unforgettable musical intensity.',
        start_date: new Date('8-14-2026 20:00:00'),
        end_date: new Date('8-14-2026 23:00:00'),
        venue_name: 'Union Avenue Opera',
        venue_address: '733 N. Union Blvd',
        venue_city: 'St. Louis',
        venue_state: 'Missouri',
        venue_zip_code: '63108',
        venue_country: 'US',
        venue_url: 'https://unionavenueopera.org/fiddler-on-the-roof/',
        venue_phone: '(314)361-2881',
        created_at: new Date('7-19-2026'),
        updated_at: new Date('7-19-2026'),
        deleted_at: new Date('7-19-2026'),
        deleted: false,
        event_type: 'Opera',
        short_description:
          "Performing in Union Avenue Opera's performance of Samson et Dalila.",
        image_url: '/assets/img/UAO Logo.png',
      },
      {
        id: 8,
        title: 'Samson Et Dalila',
        description:
          'Lush, seductive, and emotionally charged, Samson et Dalila explores love, betrayal, and the cost of vulnerability. Saint-Saëns’ sweeping score amplifies the psychological tension between the heroic Samson and the enigmatic Dalila. Anchored by the hauntingly beautiful aria “Mon cœur s’ouvre à ta voix” and thrilling dramatic choruses, this grand opera delivers passion, spectacle, and unforgettable musical intensity.',
        start_date: new Date('8-15-2026 20:00:00'),
        end_date: new Date('8-15-2026 23:00:00'),
        venue_name: 'Union Avenue Opera',
        venue_address: '733 N. Union Blvd',
        venue_city: 'St. Louis',
        venue_state: 'Missouri',
        venue_zip_code: '63108',
        venue_country: 'US',
        venue_url: 'https://unionavenueopera.org/fiddler-on-the-roof/',
        venue_phone: '(314)361-2881',
        created_at: new Date('7-19-2026'),
        updated_at: new Date('7-19-2026'),
        deleted_at: new Date('7-19-2026'),
        deleted: false,
        event_type: 'Opera',
        short_description:
          "Performing in Union Avenue Opera's performance of Samson et Dalila.",
        image_url: '/assets/img/UAO Logo.png',
      },
      {
        id: 9,
        title: 'Samson Et Dalila',
        description:
          'Lush, seductive, and emotionally charged, Samson et Dalila explores love, betrayal, and the cost of vulnerability. Saint-Saëns’ sweeping score amplifies the psychological tension between the heroic Samson and the enigmatic Dalila. Anchored by the hauntingly beautiful aria “Mon cœur s’ouvre à ta voix” and thrilling dramatic choruses, this grand opera delivers passion, spectacle, and unforgettable musical intensity.',
        start_date: new Date('8-21-2026 20:00:00'),
        end_date: new Date('8-21-2026 23:00:00'),
        venue_name: 'Union Avenue Opera',
        venue_address: '733 N. Union Blvd',
        venue_city: 'St. Louis',
        venue_state: 'Missouri',
        venue_zip_code: '63108',
        venue_country: 'US',
        venue_url: 'https://unionavenueopera.org/fiddler-on-the-roof/',
        venue_phone: '(314)361-2881',
        created_at: new Date('7-19-2026'),
        updated_at: new Date('7-19-2026'),
        deleted_at: new Date('7-19-2026'),
        deleted: false,
        event_type: 'Opera',
        short_description:
          "Performing in Union Avenue Opera's performance of Samson et Dalila.",
        image_url: '/assets/img/UAO Logo.png',
      },
      {
        id: 10,
        title: 'Samson Et Dalila',
        description:
          'Lush, seductive, and emotionally charged, Samson et Dalila explores love, betrayal, and the cost of vulnerability. Saint-Saëns’ sweeping score amplifies the psychological tension between the heroic Samson and the enigmatic Dalila. Anchored by the hauntingly beautiful aria “Mon cœur s’ouvre à ta voix” and thrilling dramatic choruses, this grand opera delivers passion, spectacle, and unforgettable musical intensity.',
        start_date: new Date('8-22-2026 20:00:00'),
        end_date: new Date('8-22-2026 23:00:00'),
        venue_name: 'Union Avenue Opera',
        venue_address: '733 N. Union Blvd',
        venue_city: 'St. Louis',
        venue_state: 'Missouri',
        venue_zip_code: '63108',
        venue_country: 'US',
        venue_url: 'https://unionavenueopera.org/fiddler-on-the-roof/',
        venue_phone: '(314)361-2881',
        created_at: new Date('7-19-2026'),
        updated_at: new Date('7-19-2026'),
        deleted_at: new Date('7-19-2026'),
        deleted: false,
        event_type: 'Opera',
        short_description:
          "Performing in Union Avenue Opera's performance of Samson et Dalila.",
        image_url: '/assets/img/UAO Logo.png',
      },
    ]



  public getAllEvents(): LiveEvent[] {

    /*
    Add a step to change the date to human readable
    */
    return this.events
  }
  public getOneEvent(id: number): LiveEvent {
    // console.log(id)
    // console.log(this.events)
    return this.events[id]
  }

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

  public getAllPatrons(): Patron[] {
    return [
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
        one_time_donations: 0,
        recurring_donations: 0,
        events_attended: 0,
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
        one_time_donations: 0,
        recurring_donations: 0,
        events_attended: 0,
      },
    ];
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
}
