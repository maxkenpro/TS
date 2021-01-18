//enemyクラスをインポートする
import { Enemy } from './enemy'

//以下、ゲームシステム
export class Game {
  user_hand: 0 | 1 | 2;
  enemy: Enemy;
  
  constructor(user_hand: 0 | 1 | 2) {
    this.user_hand = user_hand;
  }

//enemyインスタンスを作成する
  

  usercheck(): void {
    console.log(this.user_hand); 
  }
  //あいこのとき、あいこと表示させ、もう一度値を取得する。
//   if (player_hand === this.pc_hand) {
  // ユーザーが勝利したとき、あなたが勝ったと表示する。
//   }
  // PCが勝った場合、あなたが負けたと表示する
}
