import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { AddeducationComponent } from './components/addeducation/addeducation.component';
import { AddexperienceComponent } from './components/addexperience/addexperience.component';
import { AddskillComponent } from './components/addskill/addskill.component';
import { AddUserComponent} from './components/add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    AddeducationComponent,
    AddexperienceComponent,
    AddskillComponent,
    AddUserComponent
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
