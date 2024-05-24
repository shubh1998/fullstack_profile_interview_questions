let appleCount = 0
let walletMoney = 100

console.log("Initial money in wallet now - ", walletMoney)
console.log("Initially apple you buy - ", appleCount)

const buyApple = () => {
    appleCount = appleCount + 1;
    walletMoney = walletMoney - 10;
    checkWalletForMoneyAndBuyMore();
}

const checkWalletForMoneyAndBuyMore = () => {
    if(walletMoney > 0) {
        buyApple()       
    }
}

buyApple()

console.log("No money in wallet now - ", walletMoney)
console.log("Apple you buy - ", appleCount)