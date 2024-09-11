import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]',
  standalone: true
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') passarMousePorCima() {
    // this._renderer.setStyle(this._elementRef, 'background', 'yellow');
    this.background = 'yellow';
  }

  @HostListener('mouseleave') removerMouseDeCima() {
    // this._renderer.setStyle(this._elementRef, 'background', 'yellow');
    this.background = 'white';
  }

  @HostBinding('style.background') background!: string;

  constructor(
    // private _elementRef: ElementRef, 
    // private _renderer: Renderer2
  ) { }

}
