import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';

export const newInjectionToken = new InjectionToken('Hello Wordld from Injection Token')

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    UserModule
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
