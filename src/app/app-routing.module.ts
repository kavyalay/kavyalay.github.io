import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './post/add-post/add-post.component';
import { AllPostsComponent } from './post/all-posts/all-posts.component';
import { UpdatePostsComponent } from './post/update-posts/update-posts.component';

const routes: Routes = [
  { path: '', component: AllPostsComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: 'updateposts', component: UpdatePostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
