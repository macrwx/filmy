import { Component, OnInit } from "@angular/core";
import { Form, FormControl } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Movie, Review } from "../movie";
import { MoviesService } from "../movies.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie;

  rating!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MoviesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;

    this.service.getMovie(+id).subscribe((movie) => (this.movie = movie));
  }

  getRating() {
    const len = this.movie?.reviews.length || 1;
    let rating =
      this.movie?.reviews
        .map((review) => review.rating)
        .reduce((acc, curr) => acc + curr)! / len;

    this.movie!.rating = rating;
    return rating;
  }

  onSubmit(reviewForm: any) {
    let review = { ...reviewForm.value, rating: this.rating };
    this.movie?.reviews.push(review);
  }
}
