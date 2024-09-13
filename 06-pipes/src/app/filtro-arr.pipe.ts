import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArr',
  standalone: true
})
export class FiltroArrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
