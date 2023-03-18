import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie";
import { MoviesService } from "../movies.service";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
})
export class MoviesListComponent implements OnInit {
  movies!: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((movies) => (this.movies = movies));
  }
}
