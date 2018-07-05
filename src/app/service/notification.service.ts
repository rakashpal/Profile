import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

export interface NotificationMessage {
	id?: any,
	type: string,
	text: string
}


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationMessages = new Subject<NotificationMessage>();
	public notificationMessages$ = this.notificationMessages.asObservable();
  constructor() { }
  public addMessage(message: NotificationMessage){
		if (message.text) {
			this.notificationMessages.next(message);
		}
  	}
}
