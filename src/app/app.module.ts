import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';
import { AddPostComponent } from './post/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { AllPostsComponent } from './post/all-posts/all-posts.component';
import { UpdatePostsComponent } from './post/update-posts/update-posts.component';
import { ReplaceLineBreaksPipe } from './replace-line-breaks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    AddPostComponent,
    AllPostsComponent,
    UpdatePostsComponent,
    ReplaceLineBreaksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
