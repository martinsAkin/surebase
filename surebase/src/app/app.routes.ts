import { Routes } from '@angular/router';

// pages and components
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', 
    loadComponent: () => import('./pages/home-page/home-page.component').then(p => p.HomePageComponent)
  },
  {
    path: 'signup', 
    loadComponent: () => import('./pages/signup/signup.component').then(p => p.SignupComponent)
  },
  {
    path: 'login', 
    loadComponent: () => import('./pages/login/login.component').then(p => p.LoginComponent)
  },
  {
    path: 'about', 
    loadComponent: () => import('./pages/about/about/about').then(p => p.About)
  },
  {
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact/contact').then(p => p.Contact)
  },
  {
    path: 'faqs', 
    loadComponent: () => import('./pages/faq/faq.component').then(p => p.FaqComponent)
  },
  {
    path: 'insurers', 
    loadComponent: () => import('./pages/insurers-home-page/insurers-home-page').then(p => p.InsurersHomePage)
  },
  {
    path: 'brokers', 
    loadComponent: () => import('./pages/brokers-home-page/brokers-home-page').then(p => p.BrokersHomePage)
  },
  {
    path: 'terms-of-use', 
    loadComponent: () => import('./pages/terms-of-use/terms-of-use-page.component').then(p => p.TermsOfUsePageComponent)
  },
  {
    path: 'privacy-policy', 
    loadComponent: () => import('./pages/privacy/privacy-policy-page.component').then(p => p.PrivacyPolicyPageComponent)
  },
];