import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: 'test',
        component: MainComponent,
        children: [
            // {
            //     path: '', // Redirects /test to /test/one
            //     pathMatch: 'full',
            //     redirectTo: '/test/one'
            // },
            {
                path: 'one',
                component: OneComponent
            },
            {
                path: 'two',
                component: TwoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
