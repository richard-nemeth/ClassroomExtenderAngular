import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './modules/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularMaterialModule} from './modules/angular-material.module';

import {AppComponent} from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {AuthenticationResultComponent} from './components/authenticationResult/authentication.result.component';
import {LoadingComponent} from './components/notification/loading/loading.component';
import {ErrorComponent} from './components/notification/error/error.component';
import {HomeComponent} from './components/home/home.component';
import {ContentComponent} from './components/content/content.component';
import {CoursesComponent} from './components/content/courses/courses.component';
import {CourseBarComponent} from './components/content/courses/courseBar/course-bar.component';

import {NotificationService} from './services/notification.service';
import {LocalStorageService} from './services/local-storage.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthenticationService} from './services/authentication.service';
import {CoursesService} from './services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    AuthenticationResultComponent,
    LoadingComponent,
    ErrorComponent,
    HomeComponent,
    ContentComponent,
    CoursesComponent,
    CourseBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    NotificationService,
    LocalStorageService,
    AuthGuardService,
    AuthenticationService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
