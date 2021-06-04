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
import { ListKindergartenComponent } from './parent/list-kindergarten/list-kindergarten.component';
import { ListParentComponent } from './parent/list-parent/list-parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProfilParentComponent,
    HomeComponent,
    ChildrenComponent,
    BillComponent,
    ListKindergartenComponent,
    ListParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableExporterModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
