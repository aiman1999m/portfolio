import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SelfSite';
  public element!: HTMLElement | null;
  fullname: any;
  email: any;
  subject: any;
  constructor() {
  }


  onSubmit() {

  }

  contact() {
    const element = document.getElementById("contact");



    // @ts-ignore
    element.scrollIntoView();




  }
}
