// signup-form.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router'

interface CountryCode {
  code: string;
  flag: string;
  name: string;
}

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup-form.html',
  styleUrls: ['./signup-form.scss']
})
export class SignupFormComponent {
  signupForm: FormGroup;
  showPassword = false;
  showCountryDropdown = false;
  selectedCountry: CountryCode = { code: '+234', flag: '🇳🇬', name: 'Nigeria' };

  countryCodes: CountryCode[] = [
    { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' }
  ];

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agreeToTerms: [false, [Validators.requiredTrue]],
      agreeToPrivacy: [false, [Validators.requiredTrue]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleCountryDropdown(): void {
    this.showCountryDropdown = !this.showCountryDropdown;
  }

  selectCountry(country: CountryCode): void {
    this.selectedCountry = country;
    this.showCountryDropdown = false;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = {
        ...this.signupForm.value,
        phoneNumber: `${this.selectedCountry.code}${this.signupForm.value.phoneNumber}`
      };
      console.log('Form submitted:', formData);
      // Handle form submission
    } else {
      // Mark all fields as touched to show validation errors
      this.signupForm.markAllAsTouched();
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.signupForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) return 'Please enter a valid phone number';
    }
    return '';
  }
}