import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {TrackComponent} from "./track/track.component"

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:AboutUsComponent,
    path:"about"
  },
  {
    component:ContactUsComponent,
    path:"contact"
  },
  {
    component:TrackComponent,
    path:"track"
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }