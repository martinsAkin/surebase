import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cta.html',
  styleUrls: ['./cta.scss']
})
export class CtaComponent {
  emailInput = '';
  isSubmitting = false;

  onSubmit(): void {
    if (this.emailInput && this.isValidEmail(this.emailInput)) {
      this.isSubmitting = true;

      setTimeout(() => {
        console.log('Email submitted:', this.emailInput);
        this.emailInput = '';
        this.isSubmitting = false;
      }, 1500);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}