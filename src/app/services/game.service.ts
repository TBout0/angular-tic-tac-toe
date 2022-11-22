import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tile } from '../components/tile/Tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private turnSource: BehaviorSubject<string> = new BehaviorSubject('X');
  public currentTurn: Observable<string> = this.turnSource.asObservable();

  private boardSource: BehaviorSubject<Tile[]> = new BehaviorSubject([
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
    new Tile(''),
  ]);
  public board: Observable<Tile[]> = this.boardSource.asObservable();

  constructor() {}

  restartGame(): void {
    this.turnSource.next('X');
    this.boardSource.next([
      new Tile(''),
      new Tile(''),
      new Tile(''),
      new Tile(''),
      new Tile(''),
      new Tile(''),
      new Tile(''),
      new Tile(''),
      new Tile(''),
    ]);
  }

  changeTurn(turn: string): void {
    this.turnSource.next(turn === 'X' ? 'O' : 'X');
  }
}
