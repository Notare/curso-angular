import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { DestaqueDirective } from '../shared/destaque.directive';
import { NgElseDirective } from '../shared/ng-else.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective, HighlightMouseDirective, DestaqueDirective, NgElseDirective, CommonModule],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {
  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }


}
