import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './demo/posts/posts.component';
import {PostService} from './services/post.service';
import {GlobalErrorHandler} from './customErrorValidators/global-error-handler';
import { EducationComponent } from './templates/education/education.component';
import { ExperienceComponent } from './templates/experience/experience.component';
import { SkillsComponent } from './templates/skills/skills.component';
import { UserComponent } from './templates/user/user.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
