import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  rating = 0;
  hoverRating = 0;
  votado = false;

  onMouseEnter(estrella: number) {
    this.hoverRating = estrella;
  }

  onMouseLeave() {
    this.hoverRating = 0;
  }

  seleccionarRating(estrella: number) {
    this.rating = estrella;
    this.votado = true;

    console.log(`Valoración enviada: ${this.rating} estrellas.`);
  }
}