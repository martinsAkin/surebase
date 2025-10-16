// testimonial-carousel.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

interface Slide {
  id: number;
  title: string;
  description: string;
  person: {
    name: string;
    position: string;
    avatar: string;
  };
  mainColor: string;
  mainLogo: string;
  leftCard: {
    color: string;
    logo: string;
  };
  rightCard: {
    color: string;
    logo: string;
  };
  partnerLogos: {
    logo1: string;
    logo2: string;
    logo3?: string;
    featuredLogo: string;
    logo4: string;
    logo5: string;
    logo6: string;
  };
}


@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-carousel.html',
  styleUrls: ['./testimonial-carousel.scss']
})
export class TestimonialCarousel implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoSlideInterval: any;
  constructor(private cdr: ChangeDetectorRef) {}

  slides: Slide[] = [
    {
      id: 1,
      title: 'With insurance penetration in Nigeria below 3% and rapidly growing digital adoption across fintechs and banks, Surebase fills a critical gap. We bridge fragmented insurance systems, meeting the increasing demand for embedded insurance across travel, health, and banking sectors.',
      description: '',
      person: {
        name: 'Cameron Williamson',
        position: 'Chief Operations Officer',
        avatar: 'assets/Ellipse 6.svg'
      },
      mainColor: '#94BE1C',
      mainLogo: 'assets/image 2.svg',
      leftCard: {
        color: '#1E4950',
        logo: 'assets/image 4.svg'
      },
      rightCard: {
        color: '#00008F',
        logo: 'assets/image 2.svg'
      },
      partnerLogos: {
        logo1: 'assets/image 9.svg',
        logo2: 'assets/image 4.svg',
        featuredLogo: 'assets/image 2.svg',
        logo4: 'assets/image 3.svg',
        logo5: 'assets/image 5.svg',
        logo6: 'assets/image 8.svg'
      }
    },
    {
      id: 2,
      title: 'Our strategy combines a unified API, digital dashboards, and robust infrastructure for 99.99% uptime and full regulatory compliance, ensuring unmatched scale and security.',
      description: '',
      person: {
        name: 'Darrell Steward',
        position: 'Chief Technology Officer',
        avatar: 'assets/Ellipse 6.svg'
      },
      mainColor: '#00008F',
      mainLogo: 'assets/axa-logo.png',
      leftCard: {
        color: '#94BE1C',
        logo: 'assets/image 2.svg'
      },
      rightCard: {
        color: '#9D292A',
        logo: 'assets/image 2.svg'
      },
      partnerLogos: {
        logo1: 'assets/image 9a.svg',
        logo2: 'assets/image 4a.svg',
        logo3: 'assets/image 2a.svg',
        featuredLogo: 'assets/axa-logo.png',
        logo4: 'assets/image 5a.svg',
        logo5: 'assets/image 8a.svg',
        logo6: 'assets/image 10a.svg'
      }
    },
    {
      id: 3,
      title: 'Whether you\'re an insurer looking to expand your digital footprint or a broker seeking streamlined access to a vast product portfolio, Surebase is your indispensable partner.',
      description: '',
      person: {
        name: 'Darrell Steward',
        position: 'Chief Technology Officer',
        avatar: 'assets/Ellipse 7.svg'
      },
      mainColor: '#9D292A',
      mainLogo: 'assets/image 12b.svg',
      leftCard: {
        color: '#94BE1C',
        logo: 'assets/image 3.svg'
      },
      rightCard: {
        color: '#FAAD19',
        logo: 'assets/image 2.svg'
      },
      partnerLogos: {
        logo1: 'assets/image 4b.svg',
        logo2: 'assets/image 2b.svg',
        logo4: 'assets/image 11b.svg',
        featuredLogo: 'assets/image 12b.svg',
        logo5: 'assets/image 8b.svg',
        logo6: 'assets/image 10b.svg',

      }
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }



private updateProgressBarWidth(): void {
  const featuredLogo = document.querySelector('.partners-container img.featured') as HTMLElement;
  const progressBar = document.querySelector('.progress-bar') as HTMLElement;
  
  if (featuredLogo instanceof HTMLImageElement && progressBar && featuredLogo.complete) {
    const logoWidth = featuredLogo.offsetWidth;
    if (logoWidth > 0) { // Ensure we have a valid width
      progressBar.style.width = `${logoWidth}px`;
    }
  }
}

  startAutoSlide(): void {
  this.autoSlideInterval = setInterval(() => {
    this.nextSlide();
    this.cdr.detectChanges();
  }, 3000);
  
}

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

nextSlide(): void {
  this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  this.cdr.detectChanges();
}

prevSlide(): void {
  this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  this.cdr.detectChanges();
}

goToSlide(index: number): void {
  this.stopAutoSlide();
  this.currentSlide = index;
  this.startAutoSlide();
}


setProgressBarWidth(logoElement: HTMLImageElement): void {
  const logoWidth = logoElement.offsetWidth;
  document.documentElement.style.setProperty('--featured-logo-width', `${logoWidth}px`);
}

  getFeaturedLogoWidth(): number {
  const featuredLogo = document.querySelector('.partners-container img.featured') as HTMLElement;
  return featuredLogo ? featuredLogo.offsetWidth : 70; // fallback to 70px
}

get currentSlideData(): Slide {
  return this.slides[this.currentSlide];
}
}