import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import {SharedModule} from '../shared/shared.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component'
@NgModule({
  declarations: [
    HomeComponent,
    PageComponent,
    PersonalInfoComponent
   
  ],
  imports: [
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
