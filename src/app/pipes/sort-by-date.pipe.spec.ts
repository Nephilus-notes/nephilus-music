import { SortByDatePipe } from './sort-by-date.pipe';
import { LiveEvent } from '../models/liveEvent';

describe('SortByDatePipe', () => {
  let events: Array<LiveEvent>;
  let sortedEvents: Array<LiveEvent>;

  beforeEach(() => {
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
    created_at: new Date('11-29-2023'),
    updated_at: new Date('11-29-2023'),
    deleted_at: new Date('11-29-2023'),
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
  },];
  sortedEvents = [
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
      created_at: new Date('11-29-2023'),
      updated_at: new Date('11-29-2023'),
      deleted_at: new Date('11-29-2023'),
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
  ]
  });

  it('create an instance', () => {
    const pipe = new SortByDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort an array of events by date', () => {
    const pipe = new SortByDatePipe();
    expect(pipe.transform(events)).toEqual(sortedEvents);
  });
});
