// Write your code below this line.

function findLuckyNum(n){
    let possibleNum = [1,2,3,4,5,6,7,8,9,10]
    let luckyNum = []
    for (let i = 0 ; i < n ; i++){
        let x = Math.floor(Math.random() * possibleNum.length);
        luckyNum.push(possibleNum[x])
        possibleNum.splice(x,1)
    }
    return luckyNum
}  
console.log(findLuckyNum(3))




