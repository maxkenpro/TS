//calculate change of vending machine
//define function 
function UserInputMoney(price: number, paid: number): void {
  let change: number = paid - price; //define change
  const coins: number[] = [500, 100, 50, 10]; //define coins1
  let coin: number;
  let maisu: number;
  const outputDict: {[key: string]: number} = {}; // Define output dictionary
  
  if (change <= 0) {
    console.log('お金が足りません、もう一度お金を入れて下さい');
  } else {
    for (coin = 0; coin < coins.length; coin++) {
      maisu = Math.floor(change / coins[coin])
      outputDict[coins[coin].toString()] = maisu;
      change = change - coins[coin] * maisu;
    }
    console.log(JSON.stringify(outputDict));
  }
}

UserInputMoney(500, 1000);
UserInputMoney(110, 500);
UserInputMoney(120, 300);
UserInputMoney(90, 100);
UserInputMoney(200, 100);
UserInputMoney(130, 200);
UserInputMoney(180, 1000);

