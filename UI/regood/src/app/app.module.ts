import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './services/Item/item.service';
import { AuthenticationService } from './services/Authentication/authentication.service';
import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule } from  "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DndDirective } from './directive/appDnD';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent},
  

  // otherwise redirect to home
  { path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    DndDirective,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
