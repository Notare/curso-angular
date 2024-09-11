import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { DestaqueDirective } from '../shared/destaque.directive';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective, HighlightMouseDirective, DestaqueDirective],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {

}
