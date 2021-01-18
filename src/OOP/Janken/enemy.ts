class Enemy {
  //プレイヤーハンドを標準入力で取得 --現在標準入力がうまくいかないので、数値直接でやってみる。
  //PCハンドをランダムで取得
  //いづれの値もゲームクラスに送る？継承する？
  pc_hand: 0 | 1 | 2;
  
  constructor(pc_hand: 0 | 1 | 2) {
    this.pc_hand = pc_hand;
  }

  gengerate_pc_hand() :0 | 1 | 2 {
    console.log(this);
    console.log(this.pc_hand);
    return this.pc_hand;
  }
}


const enemy = new Enemy(2);
enemy.gengerate_pc_hand();
