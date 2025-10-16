import { Component } from '@angular/core';
import { HeroSection } from '../component/hero-section/hero-section';
import { MeritCard } from '../component/merit-card/merit-card';
import { Footer } from '../component/footer/footer';
import { SubHeroPage } from '../component/sub-hero-page/sub-hero-page';
import { SimplifyCard } from '../component/simplify-card/simplify-card';
import { TestimonialCarousel } from '../component/testimonial-carousel/testimonial-carousel';

@Component({
  selector: 'app-brokers-home-page',
  imports: [ SubHeroPage, HeroSection , MeritCard, TestimonialCarousel , Footer, SimplifyCard ],
  templateUrl: './brokers-home-page.html',
  styleUrl: './brokers-home-page.scss'
})
export class BrokersHomePage {
  
}
