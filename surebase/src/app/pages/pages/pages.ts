import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: `./pages.html`,
  styleUrls: ['./pages.scss']
})
export class Pages {}
