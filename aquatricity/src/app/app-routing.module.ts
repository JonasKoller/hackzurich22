import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {AppSliderComponent} from "./components/app-slider/app-slider.component";
import {InterestsComponent} from './pages/interests/interests.component';
import {LoginComponent} from "./pages/login/login.component";
import {HeaderComponent} from "./components/header/header.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ArticleCardComponent} from "./components/article-card/article-card.component";
import {OverviewContainerComponent} from "./containers/overview/overview.component";
import {canActivate} from "@angular/fire/auth-guard";
import { AuthGuard } from './_core/auth.guard';
import {MyForestComponent} from "./containers/my-forest/my-forest.component";
import { ArticlesComponent } from './containers/articles/articles.component';
import {PathsComponent} from "./containers/paths/paths.component";

const routes: Routes = [
  {
    path : '',
    component : LandingPageComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'interests',
    component: InterestsComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'overview',
    component: OverviewContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'my-forest',
    component: MyForestComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'paths',
    component: PathsComponent,
    canActivate: [AuthGuard]
  },
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
