import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const moviesRoutes: Routes = [
  { path: "movie/:id", component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
