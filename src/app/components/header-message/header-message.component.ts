import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-message',
  templateUrl: './header-message.component.html',
  styleUrls: ['./header-message.component.css']
})
export class HeaderMessageComponent implements OnInit {

  @Output()  eventClickShow = new EventEmitter();
  showAbout = true;
  constructor() { }

  ngOnInit(): void {
  }

  ShowAbout() {
    this.showAbout = !this.showAbout;
    this.eventClickShow.emit(this.showAbout);
  }
}
