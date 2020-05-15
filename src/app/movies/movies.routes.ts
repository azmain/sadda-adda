import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieIndexComponent } from './components/index/movie.index.component';

const movieRoutes: Routes = [
    {
        path: '',
        component: MovieIndexComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(movieRoutes)],
    exports: [RouterModule]
})
export class MovieRoutingModule{}