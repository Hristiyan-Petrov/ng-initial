import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.nodule';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: [
    // UserService
  ],
  exports: [
    UserListComponent,
  ]
})
export class UserModule { }
