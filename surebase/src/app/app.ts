// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',    // <-- points to the file you have
  styleUrls: ['./app.scss'],              // or remove if you don't have app.scss
})
export class AppComponent {
  title = 'surebase-ui';
}
