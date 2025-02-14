import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: false,
  
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() maxRating: number = 5; // Default number of stars
  @Input() currentRating: number = 0; // Current rating value
  @Input() isEditable: boolean = true; // Can users change the rating
  @Output() currentRatingChange: EventEmitter<number> = new EventEmitter<number>(); // Event for two-way binding

  stars: boolean[] = [];

  ngOnInit() {
    this.updateStars();
  }

  // Update the stars array based on the current rating
  updateStars() {
    this.stars = Array(this.maxRating).fill(false).map((_, index) => index < this.currentRating);
  }

  // Handle user rating
  setRating(index: number) {
    if (this.isEditable) {
      this.currentRating = index + 1;
      this.updateStars();
      this.currentRatingChange.emit(this.currentRating); // Emit the new rating
    }
  }
}
