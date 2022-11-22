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
  equals3(a:string,b:string,c:string):boolean{
    return(a==b && b==c && a==c)
  }
  changeBoardForm(board1:string[]){
    let boardz = []
    for(let z = 0; z < 3;z++){
      boardz.push(board1[z+(z*3)],board1[z+1+(z*3)],board1[z+2+(z*3)],)
    }
    return boardz
  }
  // Returns either a string or null which is the winner of the game 
  checkWinner(board1:string[],available:number[]):string|null{
    let winner = null;
    for(let i = 0;i < 3; i++){
      //horizontal
      if (this.equals3(board1[i][0], board1[i][1], board1[i][2]) && board1[i][0] != ''){
        winner = board1[i][0];
      }
      //vertical check
      if (this.equals3(board1[0][i], board1[1][i], board1[2][i]) && board1[0][i] != ''){
        winner = board1[0][i];
      }
    }
    //diagonal checks
    if (this.equals3(board1[0][0], board1[1][1], board1[2][2]) && board1[0][0] != ''){
        winner = board1[0][0];
    }
    if (this.equals3(board1[0][2], board1[1][1], board1[2][0]) && board1[0][2] != ''){
       winner = board1[0][2];
    }
    //tie check
    if (winner == null && available.length == 0){
      return 'tie'
    }else if (winner !=null){
      return winner
    } return null
  }
  // Creates an array of availabel location to be played as if the board was a grid upper left (0,0) and one right (i,j) i is y-axis j is x-axis
  checkAvailable(board0:string[]){
    let available = []
    for (var i = 0 ; i < 3 ; i++){
      for (var j = 0 ; j < 3 ; j++){
        if(board0[i][j] == ''){
          available.push([i,j])
        }
      }
    }
    return(available)
  }
  changeTurn(turn: string): void {
    this.turnSource.next(turn === 'X' ? 'O' : 'X');
  }
}
