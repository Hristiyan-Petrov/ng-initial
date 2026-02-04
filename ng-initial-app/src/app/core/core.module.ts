import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ParamsActivate } from './guards/params.activate';



@NgModule({
  declarations: [
    TimeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    // ParamsActivate
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('Core module shoul be imported only one!')
    }
  }
}
