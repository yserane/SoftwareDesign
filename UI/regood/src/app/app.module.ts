import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './services/Item/item.service';
import {HttpClientModule } from  "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
