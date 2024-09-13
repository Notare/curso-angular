import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let arrDePalavras = value.split(' ');
    let resultado = '';

    for (let palavra of arrDePalavras) {
      resultado += this.transformarPrimeiraEmMaiuscula(palavra);
    }

    return resultado;
  }

  transformarPrimeiraEmMaiuscula(palavra: string) {
    return palavra[0].toUpperCase() + palavra.slice(1).toLowerCase();
  }
}
