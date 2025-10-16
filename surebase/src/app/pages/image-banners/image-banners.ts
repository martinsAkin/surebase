import { Component } from '@angular/core';
import { FoundationSectionComponent } from "../foundation-section/foundation-section";
import { DifferentiatorSection } from "../differentiator-section/differentiator-section";

@Component({
  selector: 'app-image-banners',
  imports: [FoundationSectionComponent, DifferentiatorSection],
  templateUrl: './image-banners.html',
  styleUrl: './image-banners.scss'
})
export class ImageBanners {

}
