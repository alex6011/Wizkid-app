import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { LoginComponent } from './containers/login/login.component';
import { NewWizkidComponent } from './containers/new-wizkid/new-wizkid.component';

const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: 'base', component: BaseComponent },
  { path: 'user/:id', component: UserOverviewComponent },
  { path: 'newWizkid', component: NewWizkidComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
