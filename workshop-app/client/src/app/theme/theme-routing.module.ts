import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
        {
            path: '',
            component: ThemesComponent,
            pathMatch: 'full'
        },
        {
            path: 'create',
            component: NewThemeComponent
        },
        {
            path: ':themeId',
            component: ThemeComponent 
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
