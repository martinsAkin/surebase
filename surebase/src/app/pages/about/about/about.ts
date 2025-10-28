import { Component } from '@angular/core';
import { AboutHero } from '../hero/about-hero/about-hero';
import { ChallengeOpportunity } from '../challenge-opportunity/challenge-opportunity';
import { VisionCoreValues } from '../vision-core-values/vision-core-values';
import { BuildTheFuture } from '../../../component/build-the-future/build-the-future';

@Component({
  selector: 'app-about',
  imports: [AboutHero, ChallengeOpportunity, VisionCoreValues, BuildTheFuture],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
