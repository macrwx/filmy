import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { RatingComponent } from "../rating/rating.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MoviesListComponent, MovieDetailComponent, RatingComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MoviesModule {}
