const apple: 'apple' = 'apple';

let clothSize : 'small' | 'medium' | 'large' = 'large';

//clothSize = 'apple'; //エラー
//
const cloth = {
  color: 'black',
  size: clothSize
};

//途中で変えたい場合
cloth.size = 'small'; //error

//回避方法として
const cloth2 : {
  color: string,
  size: 'small' | 'medium' | 'large'
} = { 
  color: 'white',
  size: 'small'
}



