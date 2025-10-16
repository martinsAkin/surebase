import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flip-card.html',
  styleUrls: ['./flip-card.scss']
})
export class FlipCardComponent {
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}