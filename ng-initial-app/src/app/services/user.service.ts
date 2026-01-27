import { Inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { newInjectionToken } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      name: 'Ivan',
      age: 24
    },
    {
      name: 'Berk',
      age: 24
    },
    {
      name: 'Hristiyan',
      age: 24
    }
  ];

  constructor(
    @Inject(newInjectionToken) myString: string,
    private http: HttpClient
  ) {
    console.log(myString);
  }

  private api: string = 'https://jsonplaceholder.typicode.com/users';
  private emailApiFilter = (emails: string) => `?email_like=${emails}`;

  loadUsers(search: string = ''): Observable<IUser[]> {
    const query = search
      ? this.api + this.emailApiFilter(search)
      : this.api;
    return this.http
      .get<IUser[]>(query)
      .pipe(
        catchError(err => {
          console.log('Service caught error: ', err);
          //  Returning 'of([])' tells the Async Pipe:
          // "The stream failed, but here is an empty list to keep things moving."
          return of([]);
        })
      );
  }

  // addNewUserHandler(newUser: IUser): void {
  //   this.users.push(newUser);
  // }
}
