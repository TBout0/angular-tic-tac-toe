import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';
import { Tile } from './Tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent {
  @Input() tile: Tile = new Tile('');
  public turn: string = 'X';
  public turnSubscription: Subscription = new Subscription();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.turnSubscription = this.gameService.currentTurn.subscribe(
      (currentTurn) => (this.turn = currentTurn)
    );
  }

  ngOnDestroy(): void {
    this.turnSubscription.unsubscribe();
  }

  onClick(): void {
    if (!this.tile.mark) {
      this.tile.mark = this.turn;
      this.gameService.changeTurn(this.turn);
    } else {
      console.log('This tile is taken.');
    }
  }
}
