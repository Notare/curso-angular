import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  usuario: any = {
    nome: 'test',
    email: 'test@email.com'
  }

  enviar(formulario: any) {
    console.log(formulario);
    console.log(this.usuario);
  }
}
