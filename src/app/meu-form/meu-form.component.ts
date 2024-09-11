import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css',
})
export class MeuFormComponent {
  nome: string = 'abc';
}
