import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  private fb = inject(FormBuilder);     // <-- no constructor needed
  showPassword = signal(false);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    businessName: ['', [Validators.required, Validators.minLength(2)]],
    countryCode: ['+234', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    businessType: ['insurer', Validators.required],
    agree: [false, Validators.requiredTrue],
  });

    get f() {
    return this.form.controls;
  }
  
  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    console.log('Signup payload:', this.form.value);
  }
}
