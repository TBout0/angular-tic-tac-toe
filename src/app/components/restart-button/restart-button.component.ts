import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-restart-button',
  templateUrl: './restart-button.component.html',
  styleUrls: ['./restart-button.component.css'],
})
export class RestartButtonComponent {
  constructor(private gameService: GameService) {}

  onClick(): void {
    this.gameService.restartGame();
  }
}
