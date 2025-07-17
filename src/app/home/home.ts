import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  isButtonActive: boolean = false;

  toggleButton() {
    this.isButtonActive = !this.isButtonActive;
  }

  items = ['Angular 20', 'TypeScript', 'VS Code', 'HTML5'];
}
