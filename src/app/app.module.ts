import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponent } from './time/time.component';

export const newInjectionToken = new InjectionToken('Hello Wordld from Injection Token')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserListItemComponent,
    TimeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: newInjectionToken,
      useValue: 'TEST_STRING'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
