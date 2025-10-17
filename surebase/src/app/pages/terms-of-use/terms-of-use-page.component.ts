// src/app/pages/terms-of-use/terms-of-use-page.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-terms-of-use-page',
  standalone: true,
  // no imports needed: no pipes, no directives
  templateUrl: './terms-of-use-page.component.html',
  styleUrls: ['./terms-of-use-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsOfUsePageComponent {
  year = new Date().getFullYear(); // used in footer
}
