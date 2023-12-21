import { Pipe, PipeTransform } from '@angular/core';
import { LiveEvent } from '../models/liveEvent';

@Pipe({
  name: 'sortByDate',
  pure: false
})
export class SortByDatePipe implements PipeTransform {

  transform(value: Array<LiveEvent>): Array<LiveEvent> {
    if (value.length > 0) {
      value.sort((a, b) => {
        return a.start_date.getTime() - b.start_date.getTime();
      });
      return value;
    }
    return value;
    }
}
