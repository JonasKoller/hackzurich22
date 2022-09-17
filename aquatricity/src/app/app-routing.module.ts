import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AppSliderComponent} from "./components/app-slider/app-slider.component";
import {InterestsComponent} from './interests/interests.component';
import {LoginComponent} from "./login/login.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

const routes: Routes = [
  {path : '', component : LandingPageComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'slider', component: AppSliderComponent},
  {path : 'interests', component: InterestsComponent},
  {path : 'login', component: LoginComponent},
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
