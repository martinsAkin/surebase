import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsOfUsePageComponent } from './pages/terms-of-use/terms-of-use-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy/privacy-policy-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'faq',   component: FaqComponent },
   { path: 'terms-of-use', component: TermsOfUsePageComponent },
   { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
   { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // or 'faq'
  { path: '**', redirectTo: 'login' }                   // catch-all
];
