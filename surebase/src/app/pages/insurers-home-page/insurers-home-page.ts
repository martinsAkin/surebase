import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeritSliderInsurer } from '../../component/merit-slider-insurer/merit-slider-insurer';
import { HeroSection } from '../../component/hero-section/hero-section';
import { TestimonialCarousel } from '../../component/testimonial-carousel/testimonial-carousel';
import { BuildTheFuture } from '../../component/build-the-future/build-the-future';

@Component({
  selector: 'app-insurers-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    MeritSliderInsurer,
    TestimonialCarousel,
    BuildTheFuture
  ],
  templateUrl: './insurers-home-page.html',
  styleUrls: ['./insurers-home-page.scss']
})
export class InsurersHomePage {
  
}