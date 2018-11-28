import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(
    private s: SeoService
  ) { }

  ngOnInit() {
    this.s.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
