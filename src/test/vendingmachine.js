//calculate change of vending machine
//define function 
function UserInputMoney(price, paid) {
    var change = paid - price; //define change
    var coins = [500, 100, 50, 10]; //define coins1
    var coin;
    var maisu;
    var outputDict = {}; // Define output dictionary
    if (change <= 0) {
        console.log('お金が足りません、もう一度お金を入れて下さい');
    }
    else {
        for (coin = 0; coin < coins.length; coin++) {
            maisu = Math.floor(change / coins[coin]);
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
