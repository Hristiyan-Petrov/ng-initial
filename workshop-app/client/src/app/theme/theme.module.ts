import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { CoreModule } from "src/app/core/core.module";
import { ThemeRoutingModule } from './theme-routing.module';



@NgModule({
  declarations: [
    ThemeComponent,
    NewThemeComponent,
    ThemesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ThemeRoutingModule
]
})
export class ThemeModule { }
