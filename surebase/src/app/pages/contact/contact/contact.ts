import { Component } from '@angular/core';
import { ContactHeroComponent } from "../contact-hero/contact-hero";
import { ContactFormComponent } from "../contact-form/contact-form";
import { Footer } from "../../about/footer/footer";
import { CtaComponent } from '../cta/cta';

@Component({
  selector: 'app-contact',
  imports: [ContactHeroComponent, ContactFormComponent, CtaComponent, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
