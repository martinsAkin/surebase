// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InsurersHomePage } from './insurers-home-page/insurers-home-page';
import { BrokersHomePage } from './brokers-home-page/brokers-home-page';
import { DetailsSection } from "./component/details-section/details-section";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BrokersHomePage,
    InsurersHomePage,
    DetailsSection
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'surebase-ui';
}
