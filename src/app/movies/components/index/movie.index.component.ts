import { OnInit, Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MessageService } from 'primeng/api';
import { Movie } from '@module/movies/models/movie.model';
import { NotificationService } from '@module/shared/notification/services/notification.service';


@Component({
    selector: "sd-movie-index",
    templateUrl: './movie.index.component.html',
    styleUrls: ['./movie.index.component.css']
})
export class MovieIndexComponent implements OnInit{

    movieImageLink1: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    movieImageLink2: string = "https://minuterice.com/static/placeholder-7dd7872204da927343ba853108f4aedb.png";
    movies: Movie[] = [];

    constructor(
        private movieService: MovieService,
        private messageService: MessageService,
        private notificationService: NotificationService){

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
                    this.notificationService.showError(error.message.message);
                }
            );
    }

} 