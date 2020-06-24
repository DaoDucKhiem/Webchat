import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showImg = true;
  showFile = true;
  
  icondropTrue = "../../../assets/icons/IconAppChat/13.svg";
  icondropFalse = "../../../assets/icons/IconAppChat/19.svg";

  showAllImg() {
    this.showImg = !this.showImg;
  }

  showAllFile() {
    this.showFile = !this.showFile;
  }

}
