import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-activity',
  templateUrl: './main-activity.component.html',
  styleUrls: ['./main-activity.component.css']
})
export class MainActivityComponent implements OnInit {

  showAbout = true;

  constructor() { }

  ngOnInit(): void {
  }

}
