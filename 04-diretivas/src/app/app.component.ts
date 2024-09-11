import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgcontentComponent } from './exemplo-ngcontent/exemplo-ngcontent.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiretivaNgswitchComponent, TooltipModule, CommonModule, DiretivaNgforComponent, DiretivaNgifComponent, DiretivaNgclassComponent, DiretivaNgstyleComponent, OperadorElvisComponent, ExemploNgcontentComponent, FundoAmareloDirective, DiretivasCustomizadasComponent, HighlightMouseDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-diretivas';
}
