import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcoming'
})
export class UpcomingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
