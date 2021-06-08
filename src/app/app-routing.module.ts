import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KindergartensComponent} from './kindergartens/kindergartens.component';


const routes: Routes = [
  {path: 'kindergartenprofile', component: KindergartensComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
