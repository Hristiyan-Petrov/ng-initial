import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  UserListComponent,
]
})
export class UserModule { }
