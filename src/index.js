module.exports = function reverse (n) {
    let integerStr = n.toString().split("");
    let result = [];
    for (let i = integerStr.length-1; i >= 0; i--) {
      result.push(integerStr[i])
    }
    return +result.join("");
}
