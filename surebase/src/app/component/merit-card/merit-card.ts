import { Component, input } from '@angular/core';

@Component({
  selector: 'app-merit-card',
  imports: [],
  templateUrl: './merit-card.html',
  styleUrl: './merit-card.scss'
})
export class MeritCard {
  heading = input("");
  body = input("")
  imagePath = input("")
}
