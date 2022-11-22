import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { BoardComponent } from './components/board/board.component';
import { TurnDisplayComponent } from './components/turn-display/turn-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoardComponent,
    TurnDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
