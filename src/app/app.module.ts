import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfilParentComponent } from './parent/profil-parent/profil-parent.component';
import { HomeComponent } from './parent/home/home.component';
import {FormsModule} from '@angular/forms';
import { ChildrenComponent } from './parent/children/children.component';
import { BillComponent } from './parent/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProfilParentComponent,
    HomeComponent,
    ChildrenComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
