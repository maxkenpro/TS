class Janken {
  player_hand: 0 | 1 | 2;
  enemy_hand: 0 | 1 | 2;

  constructor(initPlayer_hand: 0 | 1 | 2, initEnemy_hand: 0 | 1 | 2) {
    this.player_hand = initPlayer_hand;
    this.enemy_hand = initEnemy_hand;
  }
  
  notification () {
    console.log(`あなたの手札は${this.player_hand}です`);
  }
}

const Gu = new Janken(2);
Gu.notification();
