import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]',
  standalone: true
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._elementRef.nativeElement, 'background', 'yellow')
  }

}
