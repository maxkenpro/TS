import { Game } from './game'

//ゲームの最終的な起動

class Janken {
  //Userからインプットしてもらう
  user_input: 0 | 1 | 2;
  game: Game
 
  //初期化
  constructor(user_input: 0 | 1 | 2) {
    this.user_input = user_input;
    this.game = new Game()
  }
  
  public initGame (): void {
    this.game(this.user_input);
  }
}

