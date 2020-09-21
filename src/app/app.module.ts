import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';

import {RootService} from './services/root.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    RootService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
