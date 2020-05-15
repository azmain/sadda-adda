import { NgModule } from "@angular/core";
import { MovieIndexComponent } from './components/index/movie.index.component';
import { MovieService } from './services/movie.service';
import { MovieRoutingModule } from './movies.routes';
import { SaddaAddaSharedModule } from '@module/shared/sadda-adda-shared.module';


@NgModule({

    declarations: [
        MovieIndexComponent
    ],
    imports: [
        MovieRoutingModule,
        SaddaAddaSharedModule
    ],
    providers: [
        MovieService
    ],
    bootstrap: [],
}) export class MoviesModule{};