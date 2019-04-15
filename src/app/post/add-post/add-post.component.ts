import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})

export class AddPostComponent implements OnInit {
  title: string;
  body: string;
  author: string;
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.title = 'My title';
    this.postService.getPosts()
      .subscribe((res) => {
        this.posts = res;
      });
  }

  save() {
    const postJSON: Post = {
      id: new Date().getTime(),
      title: this.title,
      body: this.body,
      author: this.author
    };

    console.log(postJSON);
    this.posts.push(postJSON);

    this.postService.savePosts(this.posts)
      .subscribe((res) => {
        this.posts = res;
      });
  }

  clear() {
    this.title = '';
    this.body = '';
    this.author = '';
  }

}
