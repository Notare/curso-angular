import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: true,
  imports: [],
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css',
})
export class CicloComponent {
  @Input() valorInicial: number = 10;
}
