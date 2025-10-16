import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Differentiator {
  icon: string;
  iconBg: 'blue' | 'green';
  title: string;
  description: string;
}

@Component({
  selector: 'app-differentiator-section',
  standalone: true,
  imports: [CommonModule,
             FormsModule],
  templateUrl: './differentiator-section.html',
  styleUrls: ['./differentiator-section.scss']
})
export class DifferentiatorSection {
  emailInput = '';
  isSubmitting = false;
  submitMessage = '';

  differentiators: Differentiator[] = [
    {
      icon: '/blockchain.svg',
      iconBg: 'blue',
      title: 'Single API Endpoint',
      description: 'Access thousands of products through one robust API, simplifying integrations for brokers, fintechs, and other partners.'
    },
    {
      icon: 'analytics-web.svg',
      iconBg: 'green',
      title: 'Digital Dashboard for Insurers & Brokers',
      description: 'For insurance companies without an online presence, our intuitive dashboard lets you instantly list and manage your products.'
    },
    {
      icon: 'glowing-blockchain.svg',
      iconBg: 'green',
      title: 'Seamless Integration',
      description: 'We integrate directly with registered insurance companies that already offer API access, expanding their market effortlessly.'
    },
    {
      icon: 'data-security.svg',
      iconBg: 'blue',
      title: '99.99% Uptime & Security',
      description: 'Count on near-perfect availability and a secure, multi-tenant system that adheres to NAICOM, NDPR, and GDPR standards. Surebase is the trusted infrastructure you need.'
    }
  ];

  onSubmit(): void {
    if (this.emailInput && this.isValidEmail(this.emailInput)) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Email submitted:', this.emailInput);
        this.submitMessage = 'Thank you! We\'ll be in touch soon.';
        this.emailInput = '';
        this.isSubmitting = false;
        
        // Clear message after 3 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 3000);
      }, 1000);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}