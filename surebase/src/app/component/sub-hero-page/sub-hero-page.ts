import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-hero-page',
  imports: [],
  templateUrl: './sub-hero-page.html',
  styleUrl: './sub-hero-page.scss'
})
export class SubHeroPage {
  heading = input("")
  textbody = input("")
  imgSrcPath = input("")
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sub-hero-page',
//   imports: [],
//   templateUrl: './sub-hero-page.html',
//   styleUrl: './sub-hero-page.scss'
// })
// export class SubHeroPage {

// }
