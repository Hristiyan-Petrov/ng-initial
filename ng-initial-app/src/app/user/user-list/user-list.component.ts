import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() userArray: IUser[] = [];
  users$: IUser[] | undefined;
  // users$: Observable<IUser[]> | undefined;
  message = 'No users :)';

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  };

  private userSubscription?: Subscription;

  ngOnDestoy() {
    this.userSubscription?.unsubscribe();
  }


  loadUsers(value?: string): void {
    // Assign the Observable directly. DO NOT .subscribe() here. The Async pipe handles the subscription automatically
    // this.users = this.userService.loadUsers(value);

    this.userSubscription = this.userService.loadUsers(value)
      .subscribe({
        next: data => {
          this.users$ = data;
        },
        error: err => {
          console.log('ERROR from loadUsers method, userSubsciption: ', err);
        },
        complete: () => {
          console.log('Stream finished');
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
