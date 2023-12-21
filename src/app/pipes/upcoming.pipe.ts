import { Pipe, PipeTransform } from '@angular/core';
import { LiveEvent } from '../models/liveEvent';

@Pipe({
  name: 'upcoming'
})
export class UpcomingPipe implements PipeTransform {

  transform(value: Array<LiveEvent>): Array<LiveEvent> {
    if (value.length > 0) {
      let upcomingShows: Array<LiveEvent> = [];
      let today = new Date();
      // console.log(today);
      for (let show of value) {
        if (show.start_date > today) {
          // console.log(show.start_date + ' is after ' + today);
          upcomingShows.push(show);
        }
      }
      value = upcomingShows;
      return value;
    }
    return value;
  }

  // public showOnlyUpcoming(): void {
  //   let upcomingShows: Array<LiveEvent> = [];
  //   let today = new Date();
  //   // console.log(today);
  //   for (let show of this.show_list) {
  //     if (show.start_date > today) {
  //       // console.log(show.start_date + ' is after ' + today);
  //       upcomingShows.push(show);
  //     }
  //   }
  //   this.show_list = upcomingShows;
  //   this.sortEventsByDate();
    // console.log(this.show_list)
  // }
}
