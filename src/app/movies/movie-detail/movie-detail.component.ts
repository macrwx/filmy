import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Movie } from "../movie";
import { MoviesService } from "../movies.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
})
export class MovieDetailComponent implements OnInit {
  movie$?: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MoviesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;

    this.movie$ = this.service.getMovie(+id);
  }
}
