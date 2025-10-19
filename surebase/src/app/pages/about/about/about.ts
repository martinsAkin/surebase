import { Component } from '@angular/core';
import { AboutHero } from '../hero/about-hero/about-hero';
import { ChallengeOpportunity } from '../challenge-opportunity/challenge-opportunity';
import { VisionCoreValues } from '../vision-core-values/vision-core-values';
import { CtaSection } from '../cta-section/cta-section';

@Component({
  selector: 'app-about',
  imports: [AboutHero, ChallengeOpportunity, VisionCoreValues, CtaSection],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
