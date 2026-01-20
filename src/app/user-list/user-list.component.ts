import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>(); // <IUser> points the EventEmitter will emit IUser-type objects

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement) {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    console.log(name, age);
    this.addUser.emit({ name, age });

    userNameInput.value = '';
    userAgeInput.value = '';

  }

  constructor() { }

  ngOnInit(): void {
  }

}
