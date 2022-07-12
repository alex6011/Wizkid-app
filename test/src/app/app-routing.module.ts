import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { NewWizkidComponent } from './containers/new-wizkid/new-wizkid.component';

const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: 'base', component: BaseComponent },
  {path:'newWizkid',component:NewWizkidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
