import { Component } from '@angular/core';
import { ContactHeroComponent } from "../contact-hero/contact-hero";
import { ContactFormComponent } from "../contact-form/contact-form";
import { SimplifyCard } from "../../../component/simplify-card/simplify-card";

@Component({
  selector: 'app-contact',
  imports: [ContactHeroComponent, ContactFormComponent, SimplifyCard],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
