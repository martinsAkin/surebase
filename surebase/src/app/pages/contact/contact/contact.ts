import { Component } from '@angular/core';
import { ContactHeroComponent } from "../contact-hero/contact-hero";
import { ContactFormComponent } from "../contact-form/contact-form";
import { CtaComponent } from '../cta/cta';

@Component({
  selector: 'app-contact',
  imports: [ContactHeroComponent, ContactFormComponent, CtaComponent ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
