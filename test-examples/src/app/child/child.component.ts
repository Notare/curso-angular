import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  userName: string = '';

  @Output() nameSent = new EventEmitter<string>();

  sendName() {
    this.nameSent.emit(this.userName);
  }
}
