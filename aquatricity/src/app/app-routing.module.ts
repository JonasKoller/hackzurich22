import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {InterestsComponent} from './pages/interests/interests.component';
import {LoginComponent} from "./pages/login/login.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {OverviewContainerComponent} from "./containers/overview/overview.component";
import {AuthGuard} from './_core/auth.guard';
import {MyForestComponent} from "./containers/my-forest/my-forest.component";
import {ArticlesComponent} from './containers/articles/articles.component';
import {PathsComponent} from "./containers/paths/paths.component";
import {IsLoggedInGuard} from './_core/is-logged-in.guard';
import {
  ArticleCategoryContainerComponent
} from "./containers/article-category-container/article-category-container.component";
import {PathCategoryContainerComponent} from './containers/path-category-container/path-category-container.component';
import { ReadArticleComponent } from './containers/read-article/read-article.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'articles',
    children: [{
      path: '',
      component: ArticlesComponent,
      canActivate: [AuthGuard],
    },
      {
        path: 'read',
        children: [{
          path: ':uid',
          component: ReadArticleComponent,
          canActivate: [AuthGuard],
        }],
      },
      {
        path: ':category',
        component: ArticleCategoryContainerComponent,
        canActivate: [AuthGuard],
      }]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'interests',
    component: InterestsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'overview',
    component: OverviewContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-forest',
    component: MyForestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'paths',
    children:
      [
        {
          path: '',
          component: PathsComponent,
          canActivate: [AuthGuard],
        },
        {
          path: ':category',
          component: PathCategoryContainerComponent,
          canActivate: [AuthGuard],
        }
      ]
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
export class AppRoutingModule {
}
