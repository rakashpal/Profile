import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
  }
  public downloadResume(){
    this.pushMessage('success', 'Thanks for showing Your Interest for Hiring Me');
  }
  public discoverMe(){
    this.pushMessage('warning', 'This page is not created yet.');
  }
  public pushMessage(type:string, text:string) :void {
    this.notificationService.addMessage({type:type,text:text});
  }

}
