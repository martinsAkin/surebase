import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-hero.html',
  styleUrls: ['./contact-hero.scss']
})
export class ContactHeroComponent {
  isProductsDropdownOpen = false;

  navigationItems = [
    { label: 'Our Solutions', hasDropdown: false },
    { label: 'Our Products', hasDropdown: true },
    { label: 'Resources', hasDropdown: false },
    { label: 'Contact Us', hasDropdown: false, active: true }
  ];

  toggleProductsDropdown(): void {
    this.isProductsDropdownOpen = !this.isProductsDropdownOpen;
  }
}