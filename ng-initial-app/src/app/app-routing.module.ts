import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: '/user-list'
    },
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'user-details/:id',
        component: UserDetailComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
