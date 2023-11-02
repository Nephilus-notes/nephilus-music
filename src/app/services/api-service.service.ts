import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LiveEvent } from '../models/event';
import { Setlist } from '../models/setlist';
import { Song } from '../models/song';
import { Patron } from '../models/patron';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  public getAllEvents(): LiveEvent[] {
    return [
      {
        id: 1,
        title: "Test Event",
        description: "This is a test event",
        start_date: new Date(),
        end_date: new Date(),
        venue_name: "Test Venue",
        venue_address: "123 Test St.",
        venue_city: "Test City",
        venue_state: "Test State",
        venue_zip_code: "12345",
        venue_country: "Test Country",
        venue_url: "https://www.testurl.com",
        venue_phone: "123-456-7890",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        event_type: "Test Type",
        short_description: "This is a test event",
        image_url: "https://www.testimageurl.com"
      }, 
      {
      id: 2,
      title: "test event at Smok N Pi",
      description: "This is a test event",
      start_date: new Date('10-27-2023 06:00:00'),
      end_date: new Date('10-27-2023 09:00:00'),
      venue_name: "Smok N Pi",
      venue_address: "123 Test St.",
      venue_city: "Test City",
      venue_state: "Test State",
      venue_zip_code: "12345",
      venue_country: "Test Country",
      venue_url: "https://www.testurl.com",
      venue_phone: "123-456-7890",
      created_at: new Date (),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted: false,
      event_type: "Test Type",
      short_description: "This is my second test event",
      image_url: "https://www.testimageurl.com"
      },
      {
        id: 3,
        title: "Future test event at Smok N Pi",
        description: "This is a test event",
        start_date: new Date('12-02-2023 06:00:00'),
        end_date: new Date('12-02-2023 09:00:00'),
        venue_name: "Smok N Pi",
        venue_address: "123 Test St.",
        venue_city: "Test City",
        venue_state: "Test State",
        venue_zip_code: "12345",
        venue_country: "Test Country",
        venue_url: "https://www.testurl.com",
        venue_phone: "123-456-7890",
        created_at: new Date (),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        event_type: "Test Type",
        short_description: "This is my second test event",
        image_url: "https://www.testimageurl.com"
        }
    ];
  }
  public getOneEvent(id: number): LiveEvent {
    switch (id) {
      case 2: {
        return  {
          id: 2,
          title: "Second Event",
          description: "This is a test event",
          start_date: new Date(),
          end_date: new Date(),
          venue_name: "Test Venue",
          venue_address: "123 Test St.",
          venue_city: "Test City",
          venue_state: "Test State",
          venue_zip_code: "12345",
          venue_country: "Test Country",
          venue_url: "https://www.testurl.com",
          venue_phone: "123-456-7890",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          event_type: "Test Type",
          short_description: "This is my second test event",
          image_url: "https://www.testimageurl.com"
          }
      }
      default: {
         return {
          id: 1,
          title: "Test Event",
          description: "This is a test event",
          start_date: new Date(),
          end_date: new Date(),
          venue_name: "Test Venue",
          venue_address: "123 Test St.",
          venue_city: "Test City",
          venue_state: "Test State",
          venue_zip_code: "12345",
          venue_country: "Test Country",
          venue_url: "https://www.testurl.com",
          venue_phone: "123-456-7890",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          event_type: "Test Type",
          short_description: "This is a test event",
          image_url: "https://www.testimageurl.com"
        }
      }
    }
  }

  public getAllSetlists(): Setlist[] {
    return [
      {
        id: 1,
        title: "December Smok N Pi test Setlist",
        description: "This is a test setlist",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        event_id: 3
      },
      {
        id: 2,
        title: "October Smoke N Pi test Setlist",
        description: "This is a second test setlist",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
        deleted: false,
        event_id: 2
            }
    ];
  }

  public getOneSetlist(id: number): Setlist {
  
    switch (id) {
      case 2: {
        return       {
          id: 2,
          title: "October Smoke N Pi test Setlist",
          description: "This is a second test setlist",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          event_id: 2
              }
      }
      default: {
        return {
          id: 1,
          title: "December Smok N Pi test Setlist",
          description: "This is a test setlist",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: new Date(),
          deleted: false,
          event_id: 3
        }
        
       }

    }
  }
}
