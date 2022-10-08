import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {






  constructor() { }


  ngOnInit(): void {

  }


  contact() {
    const element = document.getElementById("contact");



    // @ts-ignore
    element.scrollIntoView();




  }

  home() {


    const element = document.getElementById("firstpage");





    // @ts-ignore
    element.scrollIntoView();



  }
  about() {
    const element = document.getElementById("about");


    // @ts-ignore
    element.scrollIntoView();





  }
  projects() {
    const element = document.getElementById("projects");


    // @ts-ignore

    element.scrollIntoView();






  }


  downloadMyFile() {
    const pdfUrl = 'assets/CV.pdf';
    const pdfName = 'CV.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
