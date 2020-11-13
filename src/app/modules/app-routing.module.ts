import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthenticationComponent} from '../components/authentication/authentication.component';
import {RegistrationSuccessComponent} from '../components/registrationSuccess/registration.success.component';
import {HomeComponent} from '../components/home/home.component';

import {RouteConstants} from '../constants/route.constants';

import {AuthGuardService} from '../services/auth-guard.service';

const routes: Routes = [
  {path: RouteConstants.BASE, redirectTo: RouteConstants.REGISTRATION, pathMatch: 'full'},
  {path: RouteConstants.REGISTRATION, component: AuthenticationComponent},
  {path: RouteConstants.REGISTRATION_SUCCESS, component: RegistrationSuccessComponent},
  {path: RouteConstants.HOME, component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
