import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../components/login/login.component';
import {LoginSuccessComponent} from '../components/loginSuccess/login.success.component';
import {RouteConstants} from '../constants/route.constants';

const routes: Routes = [
  {path: RouteConstants.BASE, redirectTo: RouteConstants.LOGIN, pathMatch: 'full'},
  {path: RouteConstants.LOGIN, component: LoginComponent},
  {path: RouteConstants.LOGIN_SUCCESS, component: LoginSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
