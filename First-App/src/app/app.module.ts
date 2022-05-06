import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ModifyListComponent } from './modify-list/modify-list.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    ViewListComponent,
    ModifyListComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
