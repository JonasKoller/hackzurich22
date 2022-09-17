import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {AppSliderComponent} from "./components/app-slider/app-slider.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  {path : '', component : LandingPageComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'slider', component: AppSliderComponent},
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
