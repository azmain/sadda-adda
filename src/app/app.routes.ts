import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { from } from 'rxjs';

import { NotFoundComponent } from '@module/shared/not-found/not-found.component';
import { IndexComponent } from './index/components/index.component';
import { LoginComponent } from './shared/login/components/login.component';
import { AuthGuard } from './shared/auth/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'flat-share',
        loadChildren: '@module/flat-share/flat-share.module#FlatShareModule',
    },
    {
        path: 'movies',
        loadChildren: '@module/movies/movies.module#MoviesModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'transactions',
        loadChildren: '@module/transactions/transactions.module#TransactionsModule'
    },
    {
        path: 'tasks',
        loadChildren: '@module/tasks/tasks.module#TasksModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}