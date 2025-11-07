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
    isDevelopers = false;

    toggeleProductOffering(){
      this.isProductOffering = !this.isProductOffering
      this.isDevelopers = false;
    }

    toggleDevelopers() {
  this.isDevelopers = !this.isDevelopers;
  this.isProductOffering = false; 
   }

    closeProductOffering(){
      this.isDevelopers = false;
      this.isProductOffering = false;
    }

    isMenuOpen = false;
    toggleMenuOpen(){
      this.isMenuOpen = !this.isMenuOpen
    }
    toggleMenuClose(){
      this.isMenuOpen = false;
    }
}
