import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { ServiceComponent } from './components/service/service.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'about-team', component: AboutTeamComponent}, 
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'service', component: ServiceComponent},
  { path: 'our-history', component: OurHistoryComponent },
  { path: 'mission-vision', component: MissionVisionComponent },
  { path: 'testimonials', component: TestimonialsComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
