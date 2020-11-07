import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegistrationComponent} from '../components/registration/registration.component';
import {RegistrationSuccessComponent} from '../components/registrationSuccess/registration.success.component';
import {RouteConstants} from '../constants/route.constants';

const routes: Routes = [
  {path: RouteConstants.BASE, redirectTo: RouteConstants.REGISTRATION, pathMatch: 'full'},
  {path: RouteConstants.REGISTRATION, component: RegistrationComponent},
  {path: RouteConstants.REGISTRATION_SUCCESS, component: RegistrationSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
