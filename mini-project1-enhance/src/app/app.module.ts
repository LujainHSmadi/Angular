import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FieldsComponent } from './fields/fields.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FieldsComponent,
    HeaderComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
