import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {ProfilParentComponent} from './parent/profil-parent/profil-parent.component';
import {HomeComponent} from './parent/home/home.component';
import {ChildrenComponent} from './parent/children/children.component';
import {BillComponent} from './parent/bill/bill.component';
import {ListKindergartenComponent} from './parent/list-kindergarten/list-kindergarten.component';
import {ListParentComponent} from './parent/list-parent/list-parent.component';


const routes: Routes = [{
  path: 'parent', component: ParentComponent},
    {path: 'profile', component: ProfilParentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'children', component: ChildrenComponent},
  {path: 'bill', component: BillComponent},
  {path: 'listKindergarten', component: ListKindergartenComponent},
  {path: 'listParent', component: ListParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
