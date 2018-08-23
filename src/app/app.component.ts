import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  lastGuess:number;

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
    this.lastGuess = null;
  }

  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
    this.lastGuess = this.guess;
  }
}

