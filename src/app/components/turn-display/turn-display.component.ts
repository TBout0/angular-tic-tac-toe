import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-turn-display',
  templateUrl: './turn-display.component.html',
  styleUrls: ['./turn-display.component.css'],
})
export class TurnDisplayComponent {
  public turn: string = 'X';
  public turnSubscription: Subscription = new Subscription();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.turnSubscription = this.gameService.currentTurn.subscribe(
      (currentTurn) => (this.turn = currentTurn)
    );
  }
}
