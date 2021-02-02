import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { AddexperienceComponent } from './addexperience/addexperience.component';
import { AddskillComponent } from './addskill/addskill.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    AddeducationComponent,
    AddexperienceComponent,
    AddskillComponent
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
