import { Component, Input } from '@angular/core';
import { Tile } from './Tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent {
  @Input() tile: Tile = new Tile('');
  public turn: string = 'X';

  onClick(): void {
    if (!this.tile.mark) {
      this.tile.mark = this.turn;
    } else {
      console.log('DISABLED');
    }
  }
}
