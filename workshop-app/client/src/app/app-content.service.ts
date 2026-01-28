import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, Theme } from './shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL_BUILDER = environment.apiUrlBuilder;

@Injectable({
  providedIn: 'root'
})
export class AppContentService {
  constructor(
    private http: HttpClient
  ) { }

  loadThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(API_URL_BUILDER('/themes'));
  }

  loadPosts(limit?: number): Observable<Post[]> {
    const query = limit ? `?limit=${limit}` : ''; 
    return this.http.get<Post[]>(API_URL_BUILDER(`/posts${query}`));
  }
}
