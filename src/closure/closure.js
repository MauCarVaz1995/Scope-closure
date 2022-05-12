//No guarda los valores en la memoria
const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins +=  coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//Guarda los valores en la memoria
const moneyBox2 = () =>{
    var saveCoins =0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`moneyBox2): $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox2();

myMoneyBox(4);//4
myMoneyBox(10);//14
myMoneyBox(12);//26