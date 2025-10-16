import { Component, input } from '@angular/core';
import { Headbar } from '../headbar/headbar';

@Component({
  selector: 'app-hero-section',
  imports: [Headbar],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  heroHeading = input("")
  heroText = input("")
  image2Path = input("")
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero-section',
//   imports: [],
//   templateUrl: './hero-section.html',
//   styleUrl: './hero-section.scss'
// })
// export class HeroSection {

// }
