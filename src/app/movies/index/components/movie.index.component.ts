import { OnInit, Component } from '@angular/core';
import { MovieService } from '../services/service-api/movie.service';
import { MessageService } from 'primeng/api';


@Component({
    selector: "sd-movie-index",
    templateUrl: './movie.index.component.html'
})
export class MovieIndexComponent implements OnInit{

    movies: any[] = [];

    constructor(
        private movieService: MovieService,
        private messageService: MessageService){

    }

    ngOnInit(){
        this.getMovies();
    }

    getMovies(){
        this.movieService
            .fetchMovies(new Map())
            .subscribe(
                response=>{
                    this.movies = response;
                },
                error=>{
                    console.log(error);
                    if(error.status === 401){
                        this.messageService.add(
                            {
                                severity:'error', 
                                summary: 'Error Message', 
                                detail: 'Please login.'
                            }
                        );
                    }
                    else{
                        this.messageService.add(
                            {
                                severity:'error', 
                                summary: 'Error Message', 
                                detail: error.error.message
                            }
                        );
                    }
                }
            );
    }
} 