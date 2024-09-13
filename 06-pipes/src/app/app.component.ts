import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExemplosPipesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-pipes';
}
