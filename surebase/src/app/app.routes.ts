import { RouterModule, Routes } from '@angular/router';
import { Pages } from './pages/pages/pages';
import { TestimonialCarousel } from './pages/testimonial-carousel/testimonial-carousel';
import { About } from './pages/about/about/about';
import { SignupFormComponent } from './pages/signup-form/signup-form';
import { ListOfPartners } from './pages/list-of-partners/list-of-partners';
import { ImageBanners } from './pages/image-banners/image-banners';
import { ContactHeroComponent } from './pages/contact/contact-hero/contact-hero';
import { Contact } from './pages/contact/contact/contact';

export const routes: Routes = [
    { path: '', component: Pages },  
    { path: 'testimonial-carousel', component: TestimonialCarousel },
    { path: 'about', component: About },
    { path: 'signup-form', component: SignupFormComponent }, 
    { path: 'list-of-partners', component: ListOfPartners },
    { path: 'image-banners', component: ImageBanners },
    { path: 'contact', component: Contact }, 
    { path: '', component: Pages, pathMatch: 'full' }
];