import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class CONTACTMEComponent implements OnInit {
  fullname: any;
  email: any;
  subject: any;
  message: any;


  constructor() {
  }

  ngOnInit(): void {
  }


  onSubmit() {

  }
}
