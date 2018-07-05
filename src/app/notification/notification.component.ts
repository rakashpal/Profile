import { Component, OnInit,Input } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  
})
export class NotificationComponent implements OnInit {
  public notificationMessagesSub: Subscription;
  public className:string;
  public message:string;
  public showNotification:boolean=false;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.subscribeToNotificationAdd()
  }
  subscribeToNotificationAdd(){
    this.notificationMessagesSub = this.notificationService.notificationMessages$.subscribe(val => {
      this.showNotification=true;
      this.className="alert-"+val.type;
      this.message=val.text;
      setTimeout(()=>{
        this.showNotification=false;
      },3000);

    });
  }
  hideNotification(){
    this.showNotification=false;
  }

}
