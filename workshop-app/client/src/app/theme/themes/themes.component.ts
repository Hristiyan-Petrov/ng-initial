import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../../app-content.service';
import { Post, Theme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  themes: Theme[] | undefined;
  recentPosts: Post[] | undefined;

  constructor(private contentService: AppContentService) { 
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  ngOnInit(): void {
  }

  fetchThemes(): void {
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts() {
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }

}
