import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages and components
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { About } from './pages/about/about/about';
import { BrokersHomePage } from './pages/brokers-home-page/brokers-home-page';
import { InsurersHomePage } from './pages/insurers-home-page/insurers-home-page';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsOfUsePageComponent } from './pages/terms-of-use/terms-of-use-page.component';
import { Contact } from './pages/contact/contact/contact';
import { PrivacyPolicyPageComponent } from './pages/privacy/privacy-policy-page.component';

export const routes: Routes = [
 { path: '', redirectTo: 'about', pathMatch: 'full' },
 { path: 'signup', component: SignupComponent },
 { path: 'login', component: LoginComponent },
 { path: 'about', component: About },
 { path: 'contact', component: Contact },
 { path: 'faqs', component: FaqComponent },
 { path: 'insurers', component: InsurersHomePage },
 { path: 'brokers', component: BrokersHomePage },
 { path: 'terms-of-use', component: TermsOfUsePageComponent },
 { path: 'privacy-policy', component: PrivacyPolicyPageComponent }
];