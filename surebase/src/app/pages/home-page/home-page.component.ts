import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsSection } from '../../component/details-section/details-section';
import { TestimonialCarousel } from '../../component/testimonial-carousel/testimonial-carousel';
import { FoundationSectionComponent } from '../foundation-section/foundation-section';

type Faq = { q: string; a: string; open?: boolean };
type Testimonial = { quote: string; author: string; role: string; avatar?: string };

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, DetailsSection, TestimonialCarousel, FoundationSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  faqs: Faq[] = [
    {
      q: 'What is Surebase?',
      a: 'Surebase is a B2B insurance aggregation platform that unifies thousands of insurance products into a single, robust API. We connect licensed insurance providers with various distribution partners like brokers, fintechs, banks, and airlines. Our vision is to become the global distribution system (GDS) for insurance',
    },
    {
      q: 'Can I integrate Surebase with my existing systems?',
      a: '',
    },
    {
      q: 'How can Surebase help my insurance company?',
      a: '',
    },
    {
      q: 'How does Surebase help with policy and client management?',
      a: '',
    },
    {
      q: 'How does Surebase ensure data security and compliance?',
      a: '',
    },
  ];
  toggleFaq(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
  readonly year = new Date().getFullYear();
}
