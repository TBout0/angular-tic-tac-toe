import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Tile } from '../tile/Tile';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  public board: Tile[] = [];
  public boardSubscription: Subscription = new Subscription();

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.boardSubscription = this.gameService.board.subscribe(
      (board) => (this.board = board)
    );
  }
}
