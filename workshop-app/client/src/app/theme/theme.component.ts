import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';
import { Theme } from '../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  themes: Theme[] | undefined;

  constructor(private contentService: AppContentService) { 
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }

  ngOnInit(): void {
  }

}
