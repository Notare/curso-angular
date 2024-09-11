import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {
  tarefa: any = {
    desc: 'descriçao da tarefa',
    responsavel: null
  }
}
