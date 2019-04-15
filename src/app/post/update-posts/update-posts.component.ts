import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.less']
})
export class UpdatePostsComponent implements OnInit {

  allPosts: string;
  public allPostContent: string;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.allPostContent = '';
    this.postService.getPosts()
      .subscribe((res) => {
        this.allPosts = JSON.stringify(res, undefined, 2);
      });
  }

  save() {
    const posts = JSON.parse(this.allPosts);
    console.log(posts);
    this.postService.savePosts(posts)
      .subscribe((res) => {
        alert('Saved');
      });
  }

}
