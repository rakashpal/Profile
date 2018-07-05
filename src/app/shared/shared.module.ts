
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NotificationComponent } from '../notification/notification.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports:  [
    HeaderComponent,
    FooterComponent,
    AngularFontAwesomeModule,
    NotificationComponent
  ]
})
export class SharedModule { }
