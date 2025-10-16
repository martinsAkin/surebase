import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: `./pages.html`,
  styleUrls: ['./pages.scss']
})
export class Pages {}
