import { Component } from '@angular/core';

@Component({
  selector: 'app-headbar',
  imports: [],
  templateUrl: './headbar.html',
  styleUrl: './headbar.scss'
})
export class Headbar {

  AlertMe(){
    alert("Hi there!");
  }
}
