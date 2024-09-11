import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  standalone: true
})
export class DestaqueDirective {
  @HostListener('mouseenter') passarMousePorCima() {
    this.background = this.corDestaque;
  }

  @HostListener('mouseleave') removerMouseDeCima() {
    this.background = this.corPadrao;
  }

  @HostBinding('style.background') background!: string;

  @Input() corPadrao: string = 'white';
  @Input('appDestaque') corDestaque: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.background = this.corPadrao;
  }

}
