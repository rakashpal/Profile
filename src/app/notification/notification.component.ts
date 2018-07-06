import { Component, OnInit,Input } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { NotificationService } from '../service/notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('messageFade', [
        state('in', style({opacity: 1})),
        transition('void => *', [
          style({opacity: 0}),
          animate(1000)
        ]),
        transition('* => void', [
          style({opacity: 1}),
          animate(500)
        ])
    ])
]
  
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
  ngOnDestroy(): void {
    this.notificationMessagesSub && this.notificationMessagesSub.unsubscribe()
  }
}
