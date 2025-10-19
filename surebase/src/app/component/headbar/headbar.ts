import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive }from '@angular/router'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './headbar.html',
  styleUrl: './headbar.scss'
})
export class Headbar {
    isProductOffering = false;

    toggeleProductOffering(){
      this.isProductOffering = !this.isProductOffering
    }
    closeProductOffering(){
      this.isProductOffering = false;
    }
}
