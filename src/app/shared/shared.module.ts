
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports:  [
    HeaderComponent,
    FooterComponent,
    AngularFontAwesomeModule
  ]
})
export class SharedModule { }
