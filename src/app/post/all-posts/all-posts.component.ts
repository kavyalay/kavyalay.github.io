import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.less']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((res) => {
        this.posts = res;
      });
  }

}
