import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterComponent } from './pages/register/register.component';
import { AppSliderComponent } from './components/app-slider/app-slider.component';
import { SwiperModule } from 'swiper/angular';
import { InterestsComponent } from './pages/interests/interests.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import {FormsModule} from "@angular/forms";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";

const firebaseConfig = {
  apiKey: "AIzaSyD5BA84C5JX5hqeszCtGUzPOhPQc6QV52E",
  authDomain: "hackzurich-22.firebaseapp.com",
  projectId: "hackzurich-22",
  storageBucket: "hackzurich-22.appspot.com",
  messagingSenderId: "699860255524",
  appId: "1:699860255524:web:f6b1458b13b31aaf0429b1",
  measurementId: "G-N311ZPZBQ8"
};
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { OverviewComponent } from './pages/overview/overview.component';
import {OverviewContainerComponent} from "./containers/overview/overview.component";
import { TimelineComponent } from './components/timeline/timeline.component';
import {AuthGuard} from "./_core/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AppSliderComponent,
    InterestsComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    ArticleCardComponent,
    OverviewComponent,
    OverviewContainerComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    SwiperModule,
    FormsModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
