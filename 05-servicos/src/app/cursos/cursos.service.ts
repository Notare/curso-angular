import { Injectable } from "@angular/core";


@Injectable()
export class CursosService {
    pegarCursos() {
        return ['angular', 'java', 'python'];
    }
}