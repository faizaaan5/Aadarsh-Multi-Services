import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { FootComponent } from './components/foot/foot.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ServiceComponent } from './components/service/service.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FootComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    AboutTeamComponent,
    PrivacyPolicyComponent,
    ServiceComponent,
    OurHistoryComponent,
    MissionVisionComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
