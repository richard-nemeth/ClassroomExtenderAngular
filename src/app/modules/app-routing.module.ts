import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthenticationComponent} from '../components/authentication/authentication.component';
import {AuthenticationResultComponent} from '../components/authenticationResult/authentication.result.component';
import {HomeComponent} from '../components/home/home.component';

import {RouteConstants} from '../constants/route.constants';

import {AuthGuardService} from '../services/auth-guard.service';

const routes: Routes = [
  {path: RouteConstants.BASE, redirectTo: RouteConstants.AUTHENTICATION, pathMatch: 'full'},
  {path: RouteConstants.AUTHENTICATION, component: AuthenticationComponent},
  {path: RouteConstants.AUTHENTICATION_RESULT, component: AuthenticationResultComponent},
  {path: RouteConstants.HOME, component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
