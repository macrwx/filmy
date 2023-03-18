import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesListComponent } from "./movies/movies-list/movies-list.component";

const appRoutes: Routes = [{ path: "", component: MoviesListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
