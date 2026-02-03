import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnDestroy{

  @Input() userArray: IUser[] = [];
  users$: IUser[] | undefined;
  // users$: Observable<IUser[]> | undefined;
  message = 'No users :)';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  };

  private usersSubscription?: Subscription;

  ngOnDestroy() {
    this.usersSubscription?.unsubscribe();
  }


  loadUsers(value?: string): void {
    // Assign the Observable directly. DO NOT .subscribe() here. The Async pipe handles the subscription automatically
    // this.users = this.userService.loadUsers(value);

    this.usersSubscription = this.userService.loadUsers(value)
      .subscribe({
        next: data => {
          this.users$ = data;
        },
        error: err => {
          console.log('ERROR from loadUsers method, usersSubsciption: ', err);
        },
        complete: () => {
          console.log('User list loadUsers stream finished');
        }
      });
  };

  reloadButtonHandler(): void {
    // this.users = undefined;
    this.users$ = undefined;
    this.message = 'Wait 3 seconds for fetch :)';
    setTimeout(() => {
      this.loadUsers();
      this.message = 'No users :)'
    }, 3000);
  };

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  };

}
