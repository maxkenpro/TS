//リストの中をサイズだけにしたい。＝他のものを後で追加できないようにしたい。


enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

//enumの場合、上記の例だと例えば
//SHORT = 'SHORT'のSHORTを消してもエラーにならない。
//=で明示しない場合は、番号が自動的に振られ、番号で参照することができる。
//=で数字を明示した場合、その次の要素からその数字の次の番号が振られる

enum Hoge {
  hoge0,       //0
  hoge2,       //1
  hoge3 = 100, //100
  hoge4,       //101
  hoge5        //102
}

enum Hoge2 {
  hoge0,       //0
  hoge2,       //1
  hoge3 = 'TALL', //エラー
  hoge4,       //イニシャライズせよとエラー
  hoge5        //エラー
}

enum Hoge3 {
  hoge0,       //0
  hoge2,       //1
  hoge3 = 'TALL', 
  hoge4 = 100,       //数字を指定しあげる必要がある。
  hoge5        //101
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}


//coffeeのサイズを変更する場合に、列挙型のものを指定する場合
coffee.size = CoffeeSize.SHORT;

