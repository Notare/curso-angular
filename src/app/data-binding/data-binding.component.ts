import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeuFormComponent } from '../meu-form/meu-form.component';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule,
    MeuFormComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  url: string = 'https://loiane.training/continuar-curso/angular';
  nome: string = 'renato';
  valorInicial: number = 15;

  onMudouValor(evento: any) {
    console.log(evento);
  }
}
