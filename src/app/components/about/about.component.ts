import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public fileShared = [{
    name: "Nội dung hội nghị.pdf",
    url: ""
  }, {
    name: "Quy trình cho nhân viên.pdf",
    url: ""
  }]

  public imageShared = [{
    img: "../../../assets/images/Avatar/1.jpg"
  }, {
    img: "../../../assets/images/Avatar/2.jpg"
  }, {
    img: "../../../assets/images/Avatar/3.jpg"
  }, {
    img: "../../../assets/images/Avatar/4.jpg"
  }, {
    img: "../../../assets/images/Avatar/2.jpg"
  }, {
    img: "../../../assets/images/Avatar/1.jpg"
  }]

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
