import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
})
export class RatingComponent {
  @Input()
  interactable: boolean = false;

  @Input()
  rating!: number;

  @Output()
  ratingChange = new EventEmitter<number>();

  setRating(n: number) {
    if (!this.interactable) return;

    this.rating = n;
    this.ratingChange.emit(this.rating);
  }
}
