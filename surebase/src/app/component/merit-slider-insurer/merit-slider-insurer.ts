import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merit-slider-insurer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merit-slider-insurer.html',
  styleUrls: ['./merit-slider-insurer.scss']
})
export class MeritSliderInsurer implements OnInit {
  cards = [
      {
        header: 'Single API Integration',
        text: 'Get one single, powerful API for your business to connect with thousands of partners. This eliminates the need for multiple, costly integrations, saving you time and resources.',
        image: 'assets/insurers-encryption.png',
        bgcolor: '#fbfbfb'
      },
      {
        header: 'Expand Your Reach',
        text: 'Instantly access a wide, verified network of brokers, fintechs, and other digital distributors. Your products gain unprecedented exposure across new channels and markets.',
        image: 'assets/networking.png',
        bgcolor: '#f4aaaa'
      },
      {
        header: 'Effortless Product Management',
        text: 'List, configure, and manage a full suite of products — from life to general insurance — from one central digital dashboard. We make it easy to control your offerings and update them in real-time.',
        image: 'assets/security-svg.png',
        bgcolor: '#f7efcc'
      },
      {
        header: 'Seamless Regulatory Compliance',
        text: 'Our platform is built with full adherence to NAICOM, NDPR, and GDPR standards. Focus on your business while we handle the technical and regulatory complexities of data management.',
        image: 'assets/justice-scale.png',
        bgcolor: '#cde2d3'
      }
    ];

    currentIndex = 0;
    activeIndex = 0;
    
    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.cards.length;
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.cdr.detectChanges();
      }, 3000)
    }

    getTransform(): string {
      return `translateX(-${this.currentIndex * 750}px)`;
    }
}





// export class MeritSliderInsurer implements OnInit, OnDestroy, AfterViewInit {
//   @Input() slides: {
//     header: string;
//     text: string;
//     image: string;
//     bgcolor: string;
//   }[] = [];

//   currentIndex = 0;
//   intervalId: any;

//   @ViewChild('slider') slider!: ElementRef;

//   constructor(private cdr: ChangeDetectorRef) {}

//   ngOnInit(): void {
//     // console.log('Slides data:', this.slides);
//     this.intervalId = setInterval(() => {
//       this.nextSlide();
//     }, 3000);
//   }

//   ngOnDestroy(): void {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   ngAfterViewInit(): void {
//     this.adjustSliderHeight();
//   }

//   nextSlide(): void {
//     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
//     this.cdr.detectChanges(); // Force DOM update
//     this.adjustSliderHeight(); // Optional: keep height consistent
//   }

//   prevSlide(): void {
//     this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
//     this.cdr.detectChanges();
//     this.adjustSliderHeight();
//   }

//   adjustSliderHeight(): void {
//     if (this.slider && this.slider.nativeElement) {
//       const slides = this.slider.nativeElement.querySelectorAll('.slide');
//       let maxHeight = 0;
//       slides.forEach((slide: HTMLElement) => {
//         if (slide.offsetHeight > maxHeight) {
//           maxHeight = slide.offsetHeight;
//         }
//       });
//       this.slider.nativeElement.style.height = `${maxHeight}px`;
//     }
//   }

//   getMaxSlideHeight(): number {
//     return 250;
//   }
// }