import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './modules/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularMaterialModule} from './modules/angular-material.module';

import {AppComponent} from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {RegistrationSuccessComponent} from './components/registrationSuccess/registration.success.component';
import {LoadingComponent} from './components/notification/loading/loading.component';
import {ErrorComponent} from './components/notification/error/error.component';
import {HomeComponent} from './components/home/home.component';
import {ContentComponent} from './components/content/content.component';

import {RegistrationService} from './services/registration.service';
import {NotificationService} from './services/notification.service';
import {LocalStorageService} from './services/local-storage.service';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    RegistrationSuccessComponent,
    LoadingComponent,
    ErrorComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    RegistrationService,
    NotificationService,
    LocalStorageService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
