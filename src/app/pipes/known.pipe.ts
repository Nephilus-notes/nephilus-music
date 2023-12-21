import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'known'
})
export class KnownPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
