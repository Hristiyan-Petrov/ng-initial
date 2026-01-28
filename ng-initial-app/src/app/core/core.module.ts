import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    TimeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
