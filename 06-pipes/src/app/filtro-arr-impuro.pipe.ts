import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrPipe } from './filtro-arr.pipe';

@Pipe({
  name: 'filtroArrImpuro',
  standalone: true
})
export class FiltroArrImpuroPipe extends FiltroArrPipe {
  
}