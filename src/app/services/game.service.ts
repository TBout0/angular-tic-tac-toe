import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private turnSource: BehaviorSubject<string> = new BehaviorSubject('X');
  public currentTurn: Observable<string> = this.turnSource.asObservable();

  constructor() {}

  changeTurn(turn: string): void {
    this.turnSource.next(turn === 'X' ? 'O' : 'X');
  }
}
