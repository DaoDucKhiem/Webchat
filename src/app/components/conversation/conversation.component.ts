import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  public conversations = [{
    image: "../../../assets/images/Avatar/1.jpg",
    name: "Trung Trần",
    status: "online",
    lastMessage: "Nay họp em nhé",
    time: "7:30",
    newMessage: "1"
  }, {
    image: "../../../assets/images/Avatar/2.jpg",
    name: "Hoàng Cao Phi",
    status: "online",
    lastMessage: "hi",
    time: "14:48",
    newMessage: "5"
  }, {
    image: "../../../assets/images/Avatar/3.jpg",
    name: "Đỗ Xuân Dũng",
    status: "offline",
    lastMessage: "nay đi đá bóng không",
    time: "14:48",
    newMessage: "1"
  }, {
    image: "../../../assets/images/Avatar/4.jpg",
    name: "Trần Hải Dương",
    status: "offline",
    lastMessage: "fix bug đi",
    time: "3:04",
    newMessage: "0"
  }, {
    image: "../../../assets/images/Avatar/1.jpg",
    name: "Nguyễn Văn Minh",
    status: "online",
    lastMessage: "hello",
    time: "12:40",
    newMessage: "3"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
