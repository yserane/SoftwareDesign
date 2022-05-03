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
import { DashboardItemComponent } from './components/sub-components/dashboard-item/dashboard-item.component';
import { AuthGuardGuard } from './auth-guard.guard';
import {MatDialogModule} from '@angular/material/dialog';
import { PostItemModalComponent } from './components/sub-components/post-item-modal/post-item-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { RequestModalComponent } from './components/sub-components/request-modal/request-modal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'post-item', component: NewItemComponent,  canActivate:[AuthGuardGuard]},
  { path: 'post-list', component: PostListComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard]},
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
    DashboardItemComponent,
    PostItemModalComponent,
    RequestModalComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [ItemService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
