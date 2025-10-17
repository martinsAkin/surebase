import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type FaqItem = { q: string; a: string; };
type FaqCategory = { key: string; label: string; items: FaqItem[] };

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
    year = new Date().getFullYear();
  categories: FaqCategory[] = [
    {
      key: 'general',
      label: 'General Questions',
      items: [
        { q: 'What is Surebase?', a: 'Surebase is a B2B insurance aggregation platform that unifies thousands of insurance products into a single, robust API. We connect licensed insurance providers with various distribution partners like brokers, fintechs, banks, and airlines. Our vision is to become the global distribution system (GDS) for insurance' },
        { q: 'Who is Surebase for?', a: 'InsurTechs, banks, fintechs, and enterprises that need reliable, compliant, and scalable insurance integration.' },
        { q: 'How does Surebase ensure data security and compliance?', a: 'We bake in NDPR/GDPR and NAICOM compliance, encryption in transit and at rest, plus continuous monitoring.' },
        { q: 'What is Surebase’s uptime guarantee?', a: 'We target 99.99% uptime with multi-region redundancy and proactive observability.' },
        { q: 'Can I integrate Surebase with my existing systems?', a: 'Yes—our API-first approach and SDKs integrate with modern and legacy stacks.' },
      ],
    },
    {
      key: 'insurers',
      label: 'For Insurance Companies',
      items: [
        { q: 'How do we distribute products on Surebase?', a: 'Publish products through our partner console and gain access to our network of vetted distributors.' },
        { q: 'How are rates & rules managed?', a: 'Via the console or API; changes are versioned and auditable.' },
      ],
    },
    {
      key: 'enterprises',
      label: 'For Brokers & Corporate',
      items: [
        { q: 'Can we white-label?', a: 'Yes, configurable branding and hosted flows are available.' },
      ],
    },
  ];

  activeTab = signal(this.categories[0].key);
  expanded = signal<number | null>(0); // first item open by default

  setTab(key: string) {
    this.activeTab.set(key);
    this.expanded.set(0);
  }
  toggle(i: number) {
    this.expanded.set(this.expanded() === i ? null : i);
  }

  get activeItems(): FaqItem[] {
    return this.categories.find(c => c.key === this.activeTab())!.items;
  }
}
