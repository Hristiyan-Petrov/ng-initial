import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/interfaces/user';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, startWith, switchMap, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user$?: Observable<IUser | null>;
  hasError = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  private userSubscription?: Subscription;

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/user-list']);
    }
  }

  ngOnInit(): void {
    const userId = Number(this.activatedRoute.snapshot.params['id']);
    const { queryParams, fragment} = this.activatedRoute.snapshot;
    console.log(queryParams, fragment);
    
    // this.loadUser(userId);
    // this.user$ = this.userService.loadUser(userId).pipe(
    //   catchError(err => {
    //     this.hasError = true;
    //     console.log('ERROR from loadUser method, userSubsciption: ', err);
    //     return of(null);
    //   })
    // );

    this.user$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => {
        return this.userService.loadUser(Number(id)).pipe(
          startWith(null),
          catchError(err => {
            this.hasError = true;
            console.log('ERROR from loadUser method, userSubsciption: ', err);
            return of(null);
          })
        )
      }),
    )
  }

  // ngOnDestroy(): void {
  //   this.userSubscription?.unsubscribe();
  // }

  // loadUser(id: number): void {
  //   this.userService.loadUser(id)
  //     .subscribe({
  //       next: data => this.user$ = data,
  //       error: err => console.log('ERROR from loadUser method, userSubsciption: ', err),
  //       complete: () => console.log('User details loadUser stream finished.')
  //     });
  // }

}
