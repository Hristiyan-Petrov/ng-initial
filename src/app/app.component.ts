import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular World!';

  changeTitleHandler(inputElement: HTMLInputElement): void {
    this.title = inputElement.value;
    inputElement.value = '';
  }

  classes = ['my-class', 'class-test'];
  isSpecial = true;

  buttonClickHandler(event: MouseEvent, ...args: string[]): void {
    event.preventDefault();
    
    console.log(args); 

    
    console.log('Button clicked!!!');
    this.title += '!';
    this.showText = !this.showText;
  }

  showText = true;
  // USERS

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

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser)
  }

}
