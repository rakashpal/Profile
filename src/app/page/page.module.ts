import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import {SharedModule} from '../shared/shared.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SocialSectionComponent } from './social-section/social-section.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
@NgModule({
  declarations: [
    HomeComponent,
    PageComponent,
    PersonalInfoComponent,
    SocialSectionComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactUsComponent
   
  ],
  imports: [
    PageRoutingModule,
    SharedModule
    ]
})
export class PageModule { }
