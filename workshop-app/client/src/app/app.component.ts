import { Component } from '@angular/core';
import { Post } from './shared/interfaces';
import { AppContentService } from './app-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum-app';

  recentPosts: Post[] | undefined;

  constructor(
    private contentService: AppContentService
  ) {
    this.fetchRecentPosts();
  }

  fetchRecentPosts() {
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}
