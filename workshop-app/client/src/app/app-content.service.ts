import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, Theme } from './shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppContentService {
  private apiUrl = (resource: string) => 'http://localhost:3000/api'.concat(resource);

  constructor(
    private http: HttpClient
  ) { }

  loadThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.apiUrl('/themes'));
  }

  loadPosts(limit?: number): Observable<Post[]> {
    const query = limit ? `?limit=${limit}` : ''; 
    return this.http.get<Post[]>(this.apiUrl(`/posts${query}`));
  }
}
