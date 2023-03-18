import { Injectable } from "@angular/core";
import { MOVIES } from "./movies";
import { Movie } from "./movie";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    return of(MOVIES.find((movie) => movie.id === id)!);
  }
}
