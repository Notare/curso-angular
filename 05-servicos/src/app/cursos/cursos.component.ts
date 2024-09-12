import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: string[] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.pegarCursos();
  }
}
