import { NgModule } from "@angular/core";
import { MovieIndexComponent } from './index/components/movie.index.component';
import { MovieService } from './index/services/service-api/movie.service';
import { MovieRoutingModule } from './movies.routes';


@NgModule({

    declarations: [
        MovieIndexComponent
    ],
    imports: [
        MovieRoutingModule,
    ],
    providers: [
        MovieService
    ],
    bootstrap: [],
}) export class MoviesModule{};