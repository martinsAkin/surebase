import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsSection } from '../../component/details-section/details-section';

type Faq = { q: string; a: string; open?: boolean };
type Testimonial = { quote: string; author: string; role: string; avatar?: string };

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, DetailsSection],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  // logos = [
  //   'assets/logos/stripe.svg',
  //   'assets/logos/visa.svg',
  //   'assets/logos/mastercard.svg',
  //   'assets/logos/aws.svg',
  //   'assets/logos/azure.svg',
  //   'assets/logos/gs.svg',
  // ];

  // testimonials: Testimonial[] = [
  //   {
  //     quote:
  //       'Surebase enabled us to ship a compliant distribution flow in a week. Their sandbox & logging shortened reviews drastically.',
  //     author: 'Chidinma E.',
  //     role: 'Product Lead, AltCover',
  //     avatar: 'assets/avatars/1.png',
  //   },
  //   {
  //     quote:
  //       'The One-API approach removed 4 brittle integrations and gave us observability. Massive time saver for our team.',
  //     author: 'Tunde A.',
  //     role: 'CTO, MarketBridge',
  //     avatar: 'assets/avatars/2.png',
  //   },
  //   {
  //     quote:
  //       'Our partners love the broker console. We love the reliability and the support—fast, thoughtful, and practical.',
  //     author: 'Ife O.',
  //     role: 'Ops Manager, FinInsure',
  //     avatar: 'assets/avatars/3.png',
  //   },
  // ];
  // tIndex = 0;
  // nextTestimonial() {
  //   this.tIndex = (this.tIndex + 1) % this.testimonials.length;
  // }
  // prevTestimonial() {
  //   this.tIndex = (this.tIndex - 1 + this.testimonials.length) % this.testimonials.length;
  // }

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
