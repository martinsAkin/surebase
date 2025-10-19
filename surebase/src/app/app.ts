// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Footer } from './component/footer/footer';
import { Headbar } from './component/headbar/headbar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Headbar,
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  constructor(public router: Router){}

  get hideLayout(){
    const hiddenRoutes = ['/login', '/signup']
    return hiddenRoutes.includes(this.router.url)
  }
}
