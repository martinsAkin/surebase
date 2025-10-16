import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foundation-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foundation-section.html',
  styleUrls: ['./foundation-section.scss']
})
export class FoundationSectionComponent {
  isFlipped = false;

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }
}