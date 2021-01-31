import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './demo/posts/posts.component';
import {PostService} from './services/post.service';
import {GlobalErrorHandler} from './demo/validators/global-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
