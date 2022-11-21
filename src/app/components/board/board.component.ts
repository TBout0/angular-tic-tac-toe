import { Component } from '@angular/core';
import { Tile } from '../tile/Tile';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  public board: Tile[] = [
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
  ];
}
