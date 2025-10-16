import { Component } from '@angular/core';
import { AboutHero } from '../hero/about-hero/about-hero';
import { ChallengeOpportunity } from '../challenge-opportunity/challenge-opportunity';
import { VisionCoreValues } from '../vision-core-values/vision-core-values';
import { CtaSection } from '../cta-section/cta-section';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [AboutHero, ChallengeOpportunity, VisionCoreValues, CtaSection, Footer],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
