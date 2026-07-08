import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { LiveEvent } from 'src/app/models/liveEvent';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.css']
})
export class EventViewerComponent {

  constructor( private apiService: ApiService) {}

  show_list: LiveEvent[] = [];
  showControl: number = 1;

  
  public getAllEvents(): void {

    let full_list = [
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
        image_url: '/assets/img/cafe_smok_n_pi.jfif',
      },
      {
        id: 5,
        title: 'Fiddler on the Roof',
        description:
          'Set in the close-knit village of Anatevka, Fiddler on the Roof is a heartfelt story of family, faith, and the courage to change. As Tevye struggles to uphold tradition while his daughters follow their hearts, the musical blends warmth, humor, and profound humanity. Featuring iconic songs like “Tradition,” “If I Were a Rich Man,” and “Sunrise, Sunset,” this beloved classic remains as moving and relevant as ever.',
        start_date: new Date('7-11-2023 18:00:00'),
        end_date: new Date('7-11-2023 21:00:00'),
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
         image_url: '/assets/img/cafe_smok_n_pi.jfif',
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
        image_url: '/assets/img/DarkBG.png',
      },
    ]
    for (let show of full_list) {
      let today = new Date()
      // console.log(show.start_date, today)
      if (show.start_date > today) {
        this.show_list.push(show)
      }
      // else {
      //   console.log('show has not happened yet')
      // }
    }
    // console.log(full_list)
    // console.log(this.show_list)
    }



    ngOnInit(): void {
      this.getAllEvents()
    }
}
