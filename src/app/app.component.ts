import { Component, OnInit } from '@angular/core';
import { Post } from './post/model/post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'kavyalaya';

  constructor(private postService: PostService) {}

  ngOnInit() {
  }

}
