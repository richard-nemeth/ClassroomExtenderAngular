import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GuardedComponent } from '../components/guarded/guarder.component';

import {LoginComponent} from '../components/login/login.component';
import { RouteConstants } from '../constants/route.constants';

const routes: Routes = [
  {path: RouteConstants.BASE, component: LoginComponent},
  {path: RouteConstants.GUARDER, component: GuardedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
