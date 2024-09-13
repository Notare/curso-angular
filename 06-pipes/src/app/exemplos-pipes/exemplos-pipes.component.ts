import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { CamelCasePipe } from '../camel-case.pipe';
import { FiltroArrPipe } from '../filtro-arr.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  standalone: true,
  imports: [CommonModule, CamelCasePipe, FiltroArrPipe],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css',
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'learning javascript data structures',
    nota: 4.45633,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/'
  }

  livros: string[] = ['java', 'angular'];
  // filtro: string;

  // obterCursos() {
  //   if (this.livros.length === 0 || this.filtro === undefined) {
  //     return this.livros;
  //   }

  //   return this.livros.filter(v => {
  //     if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
  //       return true;
  //     }
  //   })
  //   return false;
  // }
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assincrono'), 2000)
  });

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => observable.next('Valor assíncrono 2'), 2000);
  });
}
